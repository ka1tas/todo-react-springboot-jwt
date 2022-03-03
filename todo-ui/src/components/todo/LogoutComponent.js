import React, {Component } from 'react';


class LogoutComponent extends Component{
    render(){
        return(
           
            <div className="alert alert-danger logoutpage">
            <h1>You are logged out.</h1>
            <div className="container">
                Thanks for using the application.
            </div>
            </div>
        )
    }
}


export default LogoutComponent;