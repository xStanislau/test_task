import React from "react";
import "./Loader.scss";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-body">
        <Spinner animation="border" />
      </div>
    </div>
  );
};

export default Loader;
