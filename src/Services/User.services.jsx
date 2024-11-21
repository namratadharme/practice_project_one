import axios from "axios";
import {
  loginEndpoint,
  registrationEndpoint,
  fetchuserDataEndpoint,
} from "../Constants/Url";

const loginResponse = { data: { token: "login", message: "login successful" } };
const userResponse = {
  fname: "Namrata",
  lname: "Dharme",
  gender: "female",
  email: "namrata@gmail.com",
};

async function userLogin(email, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(loginEndpoint, { email, password })
      .then((response) => {
        console.log(response.data);
        resolve(loginResponse);
      })
      .catch((response) => {
        console.log(response);
        resolve(loginResponse);
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
        resolve(userResponse);
      })
      .catch((error) => {
        console.log(error);
        resolve(userResponse);
      });
  });
}

export { userLogin, userRegistration, fetchData };
