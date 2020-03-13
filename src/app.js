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
    validEmai = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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
    //Event lesner
    handleSubmit = e => {
        e.preventDefault();
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const password2 = document.getElementById('password2');

        this.checkRequired([username, email, password2, password]);

        // if (this.state.username === '') {
        //     this.showError(username, 'Username is required');
        // } else {
        //     this.showSuccess(username);
        // }

        // if (email.value === '') {
        //     this.showError(email, 'Email is required');
        // } else if (!this.validEmai(email.value)) {
        //     this.showError(email, 'Email is correct');
        // } else {
        //     this.showSuccess(email);
        // }

        // if (password.value === '') {
        //     this.showError(password, 'Email is required');
        // } else {
        //     this.showSuccess(password);
        // }

        // if (password2.value === '') {
        //     this.showError(password2, 'Email is required');
        // } else {
        //     this.showSuccess(password2);
        // }
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
