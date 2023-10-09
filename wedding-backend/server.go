package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

type Planet struct {
	Name  string
	Color string
}

func main() {

	h1 := func(w http.ResponseWriter, _ *http.Request) {
		tmpl := template.Must(template.ParseFiles("../wedding-site/src/index.html"))

		// Create a map to pass to the template
		planets := map[string][]Planet{
			"Planets": {
				{Name: "Earth", Color: "Blue"},
				{Name: "Mars", Color: "Red"},
				{Name: "Venus", Color: "Yellow"},
				{Name: "Mercury", Color: "Gray"},
				{Name: "Jupiter", Color: "Orange"},
				{Name: "Saturn", Color: "Brown"},
				{Name: "Uranus", Color: "Blue"},
			},
		}

		tmpl.Execute(w, planets)
	}

	h2 := func(w http.ResponseWriter, r *http.Request) {
		name := r.PostFormValue("name")
		color := r.PostFormValue("color")

		fmt.Println("Name" + name)
		fmt.Println("Color" + color)

		htmlstr := fmt.Sprintf("<div class='planet' style='background-color:%s;'><h2>%s</h2><p>%s</p></div>", color, name, color)
		tmpl, _ := template.New("t").Parse(htmlstr)
		tmpl.Execute(w, nil)
	}

	http.HandleFunc("/", h1)
	http.HandleFunc("/add-planet", h2)

	log.Fatal(http.ListenAndServe(":8080", nil))
}
