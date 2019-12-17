import React from "react";
import axios from "axios";
import "../App.css";

function LogoutForm() {
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


    const handleClick = event => {
        event.preventDefault();
        window.location.reload(true);
        console.log("Logging you out now...");
        axiosWithAuth()
            .get(`/logout`)
            .then(res => {
                console.log("Response from Server", res);
            })
            .catch(error => console.log("Error occured during Logout", error));
    };

    return (
        <div>
            <h1>Are You Sure?!</h1>
            <h4>Click below to Logout and return Home!</h4>
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
}

export default LogoutForm;