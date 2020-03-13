import React, { Component } from 'react';
import './app.css';
class App extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };
    showError = (input, message) => {
        const formCotrol = input.parentElement;
        formCotrol.className = 'form-control error';
        const small = formCotrol.querySelector('small');
        small.innerText = message;
    };
    showSuccess = (input, message) => {
        const formCotrol = input.parentElement;
        formCotrol.className = 'form-control success';
    };
    checkEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email.value.trim())) {
            this.showSuccess(email);
        } else {
            this.showError(email, 'Email is not valid');
        }
    };

    checkPasswordMatch = (input1, input2) => {
        if (input1.value !== input2.value) {
            this.showError(input2, 'password do not match');
        }
    };

    checkRequired = inputArray => {
        inputArray.forEach(input => {
            if (input.value.trim() === '') {
                this.showError(
                    input,
                    `${this.getFeildName(input)} is required`
                );
            } else {
                this.showSuccess(input);
            }
        });
    };

    getFeildName = input => {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    };

    //checkInputLength
    checkLength = (input, min, max) => {
        if (input.value.length < min) {
            this.showError(
                input,
                `${this.getFeildName(input)} must be at least ${min} characters`
            );
        } else if (input.value.length > max) {
            this.showError(
                input,
                `${this.getFeildName(
                    input
                )} nust be  less than  ${max} characters`
            );
        } else {
            this.showSuccess(input);
        }
    };
    //Event lesner
    handleSubmit = e => {
        e.preventDefault();
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const password2 = document.getElementById('password2');

        this.checkRequired([username, email, password2, password]);
        this.checkLength(username, 3, 256);
        this.checkEmail(email);
        this.checkPasswordMatch(password, password2);
    };

    render() {
        return (
            <div className="container">
                <form id="form" className="form" onSubmit={this.handleSubmit}>
                    <h2>Register With Us</h2>
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter username"
                            value={this.state.username}
                            onChange={e =>
                                this.setState({ username: e.target.value })
                            }
                        />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={e =>
                                this.setState({ email: e.target.value })
                            }
                        />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={e =>
                                this.setState({ password: e.target.value })
                            }
                        />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password2">Confirm Password</label>
                        <input
                            type="password"
                            id="password2"
                            placeholder="Enter password again"
                            value={this.state.password2}
                            onChange={e =>
                                this.setState({ password2: e.target.value })
                            }
                        />
                        <small>Error message</small>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default App;
