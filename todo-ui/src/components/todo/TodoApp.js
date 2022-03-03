import React, {Component } from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ListTodosComponent from './ListTodoComponet';
import ErrorComponent from './ErrorComponent';
import HeaderComponent from './HeaderComponent';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import './TodoApp.css';
import TodoComponent from './TodoComponent';
import SignUpComponent from './SignupComponent';


class TodoApp extends Component{

    render(){
        return(
            <div className="todoApp">
                <BrowserRouter>
                <HeaderComponent/>
                <Switch>
                <Route path="/" component={LoginComponent} exact />
                <Route path="/login" component={LoginComponent}/>
                <Route path="/signup" component={SignUpComponent}/>
                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                <Route component={ErrorComponent} />
                </Switch>
                <FooterComponent/>
                </BrowserRouter>
    
            </div>
        )
    }


}


export default TodoApp;