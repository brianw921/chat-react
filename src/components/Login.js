import React from 'react';


import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';



class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    handleSubmit = () => {
        return null
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
                    <Button variant="contained" color="primary" type="Submit">
                        Submit
                    </Button>
                </form>
            </div>

        );
    }
}

export default Login;
