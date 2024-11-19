import axios from "axios";
import {
  loginEndpoint,
  registrationEndpoint,
  fetchuserDataEndpoint,
} from "../urlnew";

async function userLogin(email, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(loginEndpoint, { email, password })
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((response) => {
        console.log(response);
        reject(response);
      });
  });
}

async function userRegistration(
  email,
  password,
  confirmpassword,
  fname,
  lname,
  gender
) {
  return new Promise((resolve, reject) => {
    axios
      .post(registrationEndpoint, {
        email,
        password,
        confirmpassword,
        fname,
        lname,
        gender,
      })
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
async function fetchData() {
  return new Promise((resolve, reject) => {
    axios
      .get(fetchuserDataEndpoint)
      .then((response) => {
        console.log(response.data.data);
        resolve(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export { userLogin, userRegistration, fetchData };
