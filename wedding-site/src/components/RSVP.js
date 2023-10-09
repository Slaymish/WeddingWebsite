import React, { useState } from "react";
import styled from "styled-components";

const RSVPContainer = styled.div`
    padding: 2rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Input = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;


const Button = styled.button`
    padding: 0.5rem;
    background: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;


function RSVP() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        attending: true,
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
            }
        });
    };
}

export default RSVP;
