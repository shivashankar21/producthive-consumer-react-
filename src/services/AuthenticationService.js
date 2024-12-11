import axios from 'axios';
/*
  Axios, which is a popular library is mainly used to send asynchronous 
  HTTP requests(GET,POST,PUT,DELETE) to REST endpoints. 
This library is very useful to perform CRUD operations.
This popular library is used to communicate with the backend. 
Axios supports the Promise API, native to JS ES6.
Using Axios we make API requests in our application. 
Once the request is made we get the data in Return, and then we use this data in our React APPL. 

> npm install axios

*/
// Service class interacts with REST API
export default class AuthenticationService{
    

// Service method to get RESTAPI of dealers Information
  static async getDealerInfo() {
    return axios.get('http://localhost:8088/producthive/api/dealers')
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching dealer info:", error);
        throw error;
      });
  }
    
}