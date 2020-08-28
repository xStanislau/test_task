import React from "react";
import { Field } from "react-final-form";

const Error = ({ name, serverError }) => (
  <Field
    name={name || "server"}
    subscription={{ touched: true, error: true, dirtySinceLastSubmit: true }}
    render={({ meta, meta: { touched, error, dirtySinceLastSubmit } }) => {
      if (touched && error) {
        return <span className="text-danger error">{error}</span>;
      } else if (touched && serverError && !dirtySinceLastSubmit) {
        return <span className="text-danger error">{serverError}</span>;
      } else {
        return null;
      }
    }}
  />
);

export default Error;
