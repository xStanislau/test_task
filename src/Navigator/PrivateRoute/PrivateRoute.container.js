import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(PrivateRoute);
