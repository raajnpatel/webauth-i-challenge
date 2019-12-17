import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function UserCard() {
    const axiosWithAuth = () => {
        return axios
            .create({
                baseURL: "http://localhost:4444/api",
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
    };

    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    const handleChange = event => {
        setLogin({ ...login, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Login Info", login);
        axiosWithAuth()
            .post(`/login`, login)
            .then(res => {
                console.log("Response from Server", res);
            })
            .catch(error => console.log("Error occured during Login", error));
        setLogin({
            username: "",
            password: ""
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    username
                    <input
                        type="text"
                        name="username"
                        value={login.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    password
                    <input
                        type="text"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default UserCard;