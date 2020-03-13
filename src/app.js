import React, { Component } from 'react';
import './app.css';
class App extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
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
