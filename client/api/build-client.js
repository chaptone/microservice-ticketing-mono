import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // request on the server!
    return axios.create({
      baseURL: "http://www.ticketing-app.rakkan.xyz",
      headers: req.headers,
    });
  } else {
    // request on the browser!
    return axios.create({
      baseURL: "/",
    });
  }
};

export default buildClient;
