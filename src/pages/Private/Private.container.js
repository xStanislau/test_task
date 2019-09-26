import { connect } from "react-redux";
import { logOut } from "../../redux/modules/auth";
import Private from "./Private";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(Private);
