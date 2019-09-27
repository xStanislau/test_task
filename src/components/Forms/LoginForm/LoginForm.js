import React, { Component } from "react";
import { Form } from "react-final-form";
import { Button } from "react-bootstrap";
import { Field } from "react-final-form";
import { checkPassword, checkEmail } from "../../../utils/validation";
import Loader from "../../Loader/Loader";
import { validationErrors } from "../../../constants/validationErrors";
import Error from "../Error/Error";
import "./LoginForm.scss";

class LoginForm extends Component {
  onSubmit = async values => {
    await this.props.logIn(values);
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      this.props.history.push("/private");
    }
  };

  validate = values => {
    const { password, email } = validationErrors;
    const errors = {};
    if (!checkPassword(values.password)) {
      errors.password = password;
    }
    if (!checkEmail(values.email)) {
      errors.email = email;
    }
    return errors;
  };

  render() {
    const { values, error } = this.props;

    return (
      <Form
        autocomplete
        onSubmit={this.onSubmit}
        validate={this.validate}
        initialValues={values}
        render={({
          handleSubmit,
          dirtySinceLastSubmit,
          hasValidationErrors,
          dirty,
          submitting,
          hasSubmitErrors
        }) => {
          return (
            <form className="login-form" onSubmit={handleSubmit}>
              {!error && submitting && <Loader />}
              <h2 className="text-left title mb-3">Login your account</h2>
              <div className="login-form__inner">
                <label htmlFor="email">Email</label>
                <Error name="email" />
                <Field
                  name="email"
                  type="text"
                  component="input"
                  id="email"
                  placeholder="example@mail.com"
                />
                <label htmlFor="password">Password</label>
                <Error name="password" serverError={error} />
                <Field
                  name="password"
                  type="password"
                  component="input"
                  id="password"
                  placeholder="password"
                />
                <Button
                  className="btn"
                  type="submit"
                  disabled={
                    submitting ||
                    hasValidationErrors ||
                    (hasSubmitErrors && !dirtySinceLastSubmit)
                  }
                >
                  Login
                </Button>
              </div>
            </form>
          );
        }}
      />
    );
  }
}

export default LoginForm;
