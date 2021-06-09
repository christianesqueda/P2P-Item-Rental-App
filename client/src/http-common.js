import axios from "axios"

export default axios.create({
  // https://mighty-badlands-52404.herokuapp.com/api
  // http://localhost:8081/api
    baseURL: "https://mighty-badlands-52404.herokuapp.com/api",
    headers: {
      "Content-type": "application/json"
    }
  });