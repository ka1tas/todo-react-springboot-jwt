import axios from 'axios';
import { API_URL } from '../../Constants';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticateUser";

class AuthenticationService {

    basicAuthenticationCheck(username, password) {
        const basicAuth = "Basic " + window.btoa(username + ":" + password);
        const url = `/basicauth`
        return axios.get(url,
            {
                headers: { authorization: basicAuth }
            })

    }

    jwtAuthenticationCheck(username, password) {
        const url = `/authenticate`
        return axios.post(url, { username, password })

    }

    registerSuccessfulLogin(username, token) {
        const Authorization = "Bearer " + token;
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(Authorization)
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        return (user === null) ? false : true;
    }

    getUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        return (user === null) ? '' : user;
    }

    setupAxiosInterceptors(basicAuth) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuth;
                }
                return config;
            }
        )
    }


}

export default new AuthenticationService();