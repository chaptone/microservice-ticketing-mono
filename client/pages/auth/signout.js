import { useEffect } from "react";
import Router from "next/router";
import userRequest from "../../hooks/use-request";

const Signout = () => {
  const { doRequest } = userRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);
  return <div>Signing you out..</div>;
};

export default Signout;
