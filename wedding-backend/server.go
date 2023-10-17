package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"sync"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
)

type Contact struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

var messages = []Contact{}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

var clients = make(map[*websocket.Conn]bool)
var broadcast = make(chan Contact)
var mutex = &sync.Mutex{}

func main() {
	r := mux.NewRouter()

	// Websocket route
	r.HandleFunc("/ws", WebSocketHandler)

	r.HandleFunc("/api/hello", MyHandler)
	r.HandleFunc("/api/contact", ContactHandler).Methods("POST")
	r.HandleFunc("/api/contact/all", GetAllMessages).Methods("GET")

	go handleMessages()

	headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"})
	origins := handlers.AllowedOrigins([]string{"*"})

	http.ListenAndServe(":8080", handlers.CORS(headers, methods, origins)(r))
}

func handleMessages() {
	for {
		message := <-broadcast
		mutex.Lock()
		messages = append(messages, message)
		mutex.Unlock()

		for client := range clients {
			err := client.WriteJSON(messages)
			if err != nil {
				client.Close()
				delete(clients, client)
			}
		}
	}
}

func WebSocketHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		return
	}

	defer conn.Close()
	clients[conn] = true

	for {
		var msg Contact
		err := conn.ReadJSON(&msg)
		if err != nil {
			delete(clients, conn)
			break
		}
		broadcast <- msg
	}
}

func MyHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, world!"))
}

func GetAllMessages(w http.ResponseWriter, r *http.Request) {
	mutex.Lock()
	messagesJSON, err := json.Marshal(messages)
	mutex.Unlock()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(messagesJSON)
}

func ContactHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var contact Contact
	err = json.Unmarshal(body, &contact)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	broadcast <- contact
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"message": "Message received!"}`))
}
