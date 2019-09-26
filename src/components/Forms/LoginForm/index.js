import LoginForm from "./LoginForm";
import { withRouter } from "react-router-dom";
import { logIn } from "../../../redux/modules/auth";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { logIn }
)(withRouter(LoginForm));
