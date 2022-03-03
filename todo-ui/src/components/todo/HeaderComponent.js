import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import AuthenticationService from '../../api/authentication/AuthenticationService';
import { withRouter } from 'react-router';


class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return(
            <header>
                <nav className="navbar  navbar-expand-md navbar-dark bg-dark mg-o">
                   <div> <a className="navbar-brand" href="https://www.facebook.com/saikat.singhamahapatra.9">Saikat</a></div>
                    <ul className="navbar-nav">
                       {isUserLoggedIn && <li> <Link className="nav-link" to="/welcome/saikat">Home</Link></li>}
                       {isUserLoggedIn &&<li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li><Link className="nav-link" to="/login">login</Link></li>}
                    {!isUserLoggedIn && <li><Link className="nav-link" to="/signup">signup</Link></li>}
                    {isUserLoggedIn &&  <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}


 export default withRouter(HeaderComponent);