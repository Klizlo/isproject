import React, {Component} from 'react'
import Variables from "../components/Globals/Variables";

export default class Login extends Component {
    endpoint = Variables.API + "/login";

    constructor(props, context) {
        super(props, context);
        this.LogIn = this.LogIn.bind(this)
    }

    LogIn = (event) => {
        event.preventDefault();
        fetch(this.endpoint, {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: event.target.login.value,
                password: event.target.password.value
            })
        })
            .then(res => res.json())
            .then(data => {
                Variables.Token = data.token;
                console.log(Variables.Token);
            });
        if(Variables.Token !== ""){

        }
    }

    render() {
        return (
            <form onSubmit={this.LogIn}>
                <h3>Logowanie</h3>
                <div className="mb-3">
                    <label>Login</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Podaj Login"
                        name={"login"}
                    />
                </div>
                <div className="mb-3">
                    <label>Hasło</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Podaj Hasło"
                        name={"password"}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Zaloguj
                    </button>
                </div>
            </form>
        )
    }
}