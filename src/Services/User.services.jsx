import axios from "axios";
import { loginEndpoint, registrationEndpoint } from "../urlnew";

async function userLogin(email, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(loginEndpoint, { email, password })
      .then((response) => {
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        resolve(response.data.token);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

async function userRegistration(email, password, confirmpassword) {
  return new Promise((resolve, reject) => {
    axios
      .post(registrationEndpoint, { email, password, confirmpassword })
      .then((response) => {
        console.log("Registration successful", response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export { userLogin, userRegistration };
