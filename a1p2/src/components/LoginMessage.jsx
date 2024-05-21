// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn?"Welcome User":"Not Logged In"}</div>;
}

export default LoginMessage;
