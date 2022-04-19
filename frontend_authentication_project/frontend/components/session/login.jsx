import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => (
            this.setState({
                [type]: e.target.value
            })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/chirps'));
    }

    render() {
        return (
            <div className="session-form">
                <h1>Login!</h1>
                <form>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <button onClick={this.handleSubmit}></button>
                </form>
            </div>
        )
    }
}