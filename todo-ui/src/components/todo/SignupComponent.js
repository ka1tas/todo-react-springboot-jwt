import React, { Component } from 'react';



class SignUpComponent extends Component {

    constructor(props) {

        super(props);
        this.state = {
            username: "",
            email:"",
            password: "",
            serverError: false,
            signupSuccess:false,
            signupError:false
        }
    }

    handleChange = (e) => {

        const data = e.target.value;
        const field = e.target.name;
        this.setState(() => (
            { [field]: data }
        ))
    }

    subitForm=()=>{

    }
    render() {
        return (
            <div className="signup">
                <div className="container-fluid">
                    <div className="row"> <br></br> </div>

                    <div className="row">
                        <div className="col-sm-12 col-12 col-md-3 col-lg-4"></div>
                        <div className="col-sm-12 col-12 col-md-6 col-lg-4">
                            <h2>Sign Up</h2>
                        </div>
                        <div className="col-sm-12 col-12 col-md-3 col-lg-4"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-12 col-md-3 col-lg-4"></div>
                        <div className="col-sm-12 col-12 col-md-6 col-lg-4">
                            {this.state.serverError ? <div id="errorwrong" className="alert alert-danger">
                                <h4>Server not responding! Check internet.</h4>
                            </div> : null}

                            {this.state.signupSuccess ? <div id="errorwrong" className="alert alert-success">
                                <h4>User signed up successfully.</h4>
                            </div> : null}

                            {this.state.signupError ? <div id="errorwrong" className="alert alert-danger">
                                <h4>User not signed up, duplicate email.</h4>
                            </div> : null}

                        </div>
                        <div className="col-sm-12 col-12 col-md-3 col-lg-4"></div>
                    </div>

                    <div className="row">

                        <div className="col-sm-12 col-12 col-md-3 col-lg-4"></div>
                        <div className="col-sm-12 col-12 col-md-6 col-lg-4">
                            <form onSubmit={this.subitForm}>
                                <div className="form-group">
                                    <label > Name </label>
                                    <input type="text" className="form-control"
                                        name="username" placeholder="Enter your Name" />
                                </div>

                                <div className="form-group">
                                    <label > Email </label>
                                    <input type="text" className="form-control" name="email" id="signupEmail"
                                        placeholder="Enter a valid Email" />
                                </div>

                                <div className="form-group">
                                    <label> Password </label>
                                    <input type="password" className="form-control" name="password" id="signupPassword"
                                        placeholder="Create Your Password" />
                                </div>

                                <div className="form-group">
                                    <input type="button" className="btn btn-success" value="Submit" id="signupButton" />
                                </div>
                            </form>

                        </div>

                        <div className="col-sm-12 col-12 col-md-3 col-lg-4"></div>

                    </div>


                </div>
            </div >
        )
    }
}

export default SignUpComponent;