import React, { Component } from 'react';
import { Snackbar } from './snackbar';

import LoginForm from '../src/components/LoginForm';
import RegisterForm from "./components/RegisterForm";
import LogoutForm from "./components/LogoutForm";
import UserCard from "./components/UserCard";

class App extends Component {
    snackbarRef = React.createRef();

    _showSnackbarHandler = (e) => {
        e.preventDefault();
        this.snackbarRef.current.openSnackBar(<LogoutForm/>);
    };

    render() {
        return (
            <div className="App">
                <button onClick={this._showSnackbarHandler}>Click Here Log Out</button>
                <Snackbar ref={this.snackbarRef}/>
                <br/>
                <br/>
                <h2>Register</h2>
                <RegisterForm/>
                <br/>
                <br/>
                <h2>Login</h2>
                <LoginForm/>
                <br/>
                <UserCard/>
            </div>
        );
    }
}

export default App;