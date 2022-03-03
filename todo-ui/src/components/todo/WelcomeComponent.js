import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component {

    // constructor(props) {
    //     super(props);
    //     this.getWelcomeMessage = this.getWelcomeMessage.bind(this);
    //     this.getWelcomeBeanMessage = this.getWelcomeBeanMessage.bind(this);
    //     this.getCustomizedMessage = this.getCustomizedMessage.bind(this);
    //     this.setName = this.setName.bind(this);

    //     this.state = {
    //         welcomeMessege: '',
    //         welcomeMessege2: '',
    //         customizedMessgae: '',
    //         name: '',
    //         errorOccured: false
    //     }
    // }


    // setName(e) {
    //     e.preventDefault();
    //     const name = e.target.value;
    //     this.setState(() => ({ name }))
    // }

    // getWelcomeMessage() {
    //     //console.log("Retriving data from backend. Please wait...");
    //     HelloWorldService.executeHelloWorldService()
    //         .then(response => this.setState(() => ({ welcomeMessege: response.data, errorOccured: false })))
    //         .catch(error => this.setState(() => ({ errorOccured: true })))
    // }



    // getCustomizedMessage() {
    //     //console.log("Retriving data from backend. Please wait...");
    //     if (this.state.name !== '') {
    //         HelloWorldService.executeCustomizedHelloWorldService(this.state.name)
    //             .then(response => this.setState(() => ({ customizedMessgae: response.data.string, errorOccured: false })))
    //             .catch(error => this.setState(() => ({ errorOccured: true })))
    //     }
    // }

    // getWelcomeBeanMessage() {
    //     //console.log("Retriving data from backend. Please wait...");
    //     HelloWorldService.executeHelloWorldBeanService()
    //         .then(response => this.setState(() => ({ welcomeMessege2: response.data.string, errorOccured: false })))
    //         .catch(error => this.setState(() => ({ errorOccured: true })))
    // }

    render() {
        return (
            <div className="welcomeComponent">
                <h1>Welcome!</h1>
                <div className="container welcomeMessage">
                    Welcome to the TodoApp, <span className="usernameMessage"> {this.props.match.params.name} </span>
                    <p>kindly visit the <Link to="/todos">Todo page</Link> to manage your todos.</p>

                </div>
                {/* 
                <div className="container">
                    Click here for a nice message!
                <button className="btn btn-success" onClick={this.getWelcomeMessage}> Click Me!</button>
                    {this.state.errorOccured ? <div className='alert alert-warning'>Error in fetching details! </div> : null}
                    <p>{this.state.welcomeMessege}</p>
                </div>
                <br />
                <div className="container">
                    Click here for a diffrent message!
                <button className="btn btn-success" onClick={this.getWelcomeBeanMessage}> Click Me!</button>
                    {this.state.errorOccured ? <div className='alert alert-warning'>Error in fetching details! </div> : null}
                    <p>{this.state.welcomeMessege2}</p>
                </div>

                <br />

                <div className="container">
                    Click here for a customized message!
                    <input className='form-control' onChange={this.setName} />
                    <button className={(this.state.name === '') ? "btn btn-success disabled" : "btn btn-success"}
                        onClick={this.getCustomizedMessage}> Click Me!</button>
                    {this.state.errorOccured ? <div className='alert alert-warning'>Error in fetching details! </div> : null}
                    <p>{this.state.customizedMessgae}</p>
                </div> */}

            </div>
        )
    }



}


export default WelcomeComponent;