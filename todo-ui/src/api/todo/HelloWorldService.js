import axios from 'axios';

class HelloWorldService {

    executeHelloWorldService() {
        //console.log("In the hello world service, executing task.....");
        return axios.get('http://localhost:8080/hello');
    }
    executeHelloWorldBeanService() {
        //console.log("In the hello world service, executing task.....");
        return axios.get('http://localhost:8080/hello-bean');
    }

    executeCustomizedHelloWorldService(pathvariable) {
        //console.log("In the hello world service, executing task.....");
        const url = 'http://localhost:8080/hello-bean/'+pathvariable;
        return axios.get(url);
    }

}

export default new HelloWorldService();