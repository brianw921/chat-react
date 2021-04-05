import React from 'react';


import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import {APP_URL} from '../constants';



class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${APP_URL}/api/v1/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user: {
                username: this.state.username,
                password: this.state.password
            }})
        })
        .then(res => res.json())
        .then( data => {
            if (data.authenticated){
                localStorage.setItem('jwt_token', data.token)
                this.props.updateCurrentUser(data.user)
            } else {
                alert('Pass/Username notfound')
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
                <h1>Login</h1>
                <form noValidate autoComplete="off" onSubmit={(e) => this.handleSubmit(e)} >
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
                    <Button variant="contained" color="primary" type="Submit">
                        Submit
                    </Button>
                </form>
            </div>

        );
    }
}

export default Login;
