import axios from "axios";
import getConfig from "next/config";

const buildClient = ({ req }) => {
  console.log("env = " + process.env.NODE_ENV);
  let serverBaseURL =
    "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local";
  if (process.env.NODE_ENV === "production") {
    serverBaseURL = "http://www.ticketing-app.rakkan.xyz";
  }
  if (typeof window === "undefined") {
    // request on the server!
    return axios.create({
      baseURL: serverBaseURL,
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
