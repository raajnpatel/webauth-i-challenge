import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function RegisterForm() {
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

    const [register, setRegister] = useState({
        username: "",
        password: ""
    });

    const handleChange = event => {
        setRegister({ ...register, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Registration Info", register);
        axiosWithAuth()
            .post(`/register`, register)
            .then(res => {
                console.log("Response from Server", res);
            })
            .catch(error => console.log("Error occured during Registration", error));
        setRegister({
            username: "",
            password: ""
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={register.username}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={register.password}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default RegisterForm;