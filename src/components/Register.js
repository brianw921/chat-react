import React from 'react';


import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { APP_URL } from '../constants';



class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            password_confirmation: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${APP_URL}/api/v1/users`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
                'token': localStorage.getItem("jwt_token")
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password,
                    password_confirmation: this.state.password_confirmation
                }
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log("hello",result)
                if (result.authenticated) {
                    localStorage.setItem('jwt_token', result.token)
                    this.props.updateCurrentUser(result.user.data)
                } else {
                    alert('User Registration was not successfull!');
                }
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <div className="form-items">
                <h1>Register</h1>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit} >
                    <h3>UserName</h3>
                    <TextField
                        label="UserName"
                        variant="outlined"
                        name="username"
                        value={this.state.username}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <h3>Password</h3>
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={(e) => this.handleChange(e)}
                    /><br /><br />
                    <h3>Confirm Password</h3>
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        name="password_confirmation"
                        value={this.state.password_confirmation}
                        onChange={(e) => this.handleChange(e)}
                    /><br /><br />
                    <Button variant="contained" color="primary" type="Submit">
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default Register

