const InitAuthState = () => {
  if (localStorage.getItem("user") !== null) {
    const user = JSON.parse(localStorage.getItem("user"));
    const { isAuthenticated } = user;
    return { auth: { isAuthenticated } };
  }
};

export default InitAuthState;
