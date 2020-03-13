import React, { Component } from 'react';
import './app.css';
class App extends Component {
    render() {
        return (
            <div className="container">
                <form id="form " className="form">
                    <h2>Register form</h2>
                    <div className="form-control">
                        <label htmlFor="username"> Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter username..."
                        />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username"> Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email..."
                        />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username"> password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password..."
                        />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username"> re-password</label>
                        <input
                            type="password"
                            id="repassword"
                            placeholder="Enter re-password..."
                        />
                        <small>Error message</small>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default App;
