import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from '../../api/authentication/AuthenticationService';
import './TodoApp.css';



class LoginComponent extends Component {

    constructor(props) {

        super(props);
        this.state = {
            username: "",
            password: "",
            loginFailed: false
        }
    }

    handleChange = (e) => {

        const data = e.target.value;
        const field = e.target.name;
        this.setState(() => (
            { [field]: data }
        ))
    }

    checkLogin = () => {


        // AuthenticationService.basicAuthenticationCheck(this.state.username, this.state.password)
        // .then(()=>{
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.setState(() => ({ loginFailed: false }))
        //     this.props.history.push(`/welcome/${this.state.username}`)
        // }).catch(()=>{
        //     this.setState(() => ({ loginFailed: true }))
        // }
        // )


        AuthenticationService.jwtAuthenticationCheck(this.state.username, this.state.password)
            .then((response) => {
                console.log(response.data.token);
                AuthenticationService.registerSuccessfulLogin(this.state.username, response.data.token);
                this.setState(() => ({ loginFailed: false }))
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState(() => ({ loginFailed: true }))
            }
            )



        // }
        // else {
        //     this.setState(() => ({ loginFailed: true }))
        // }
    }


    render() {
        return (
            <div>
                <h1 className="loginHeader">Login</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12"></div>
                        <div className="col-lg-4 col-12">
                            {this.state.loginFailed ? <div className='alert alert-warning'>Invalid Credentials </div> : null}
                            {/*this.state.loginChecker && <div className="loginSuccess">Succesfully logged in. </div>*/}
                            <div className="row">
                                <label className="labels">UserName : </label>
                            </div>
                            <div className="row">
                                <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                            </div>
                            <div className="row">
                                <label className="labels">Password : </label>
                            </div>
                            <div className="row">
                                <input className="form-control" type="password" placeholder="password" name="password"
                                    value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <div className="row">
                                <button className="btn btn-success loginbtn" onClick={this.checkLogin}>Login</button>
                            </div>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                    <br />
                   <p> Not sign up yet? <Link className="nav-link" to="/signup">signup here!</Link> </p>
                </div>
            </div>
        )
    }


}

export default LoginComponent;