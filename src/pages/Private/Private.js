import React from "react";
import { Button } from "react-bootstrap";

const Private = ({ logOut }) => {
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="login-page">
      <h3>Private Page</h3>
      <Button onClick={handleLogOut}>Logout</Button>
    </div>
  );
};

export default Private;
