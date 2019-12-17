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

    const getUsers = () => {
        axiosWithAuth()
            .get("/users")
            .then(res => console.log("users", res))
            .catch(error => console.log("Error occured while fetching Users", error));
    };


    return (
        <div>
            <button onClick={() => getUsers()}>
                Press to check console for users
            </button>
        </div>
    )
}

export default UserCard;