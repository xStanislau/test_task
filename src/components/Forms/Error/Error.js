import React from "react";
import { Field } from "react-final-form";

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true, submitError: true }}
    render={({ meta: { touched, error, submitError } }) => {
      if (touched && error) {
        return <span className="text-danger error">{error}</span>;
      } else if ((touched, submitError)) {
        debugger;
        return <span className="text-danger error">{submitError}</span>;
      } else {
        return null;
      }
    }}
  />
);

export default Error;
