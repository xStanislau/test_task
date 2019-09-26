import login from "../../api/user/login";

// actions
const LOG_IN = "app/auth/LOG_IN";
const LOG_IN_FAILED = "app/auth/LOG_IN_FAILED";
const LOG_IN_SUCCEEDED = "app/auth/LOG_IN_SUCCEEDED";
const LOG_OUT = "app/auth/LOG_OUT";
const LOG_OUT_FAILED = "app/auth/LOG_OUT_FAILED";
const LOG_OUT_SUCCEEDED = "app/auth/LOG_OUT_SUCCEEDED";

// action creators
export const logInStart = () => ({
  type: LOG_IN
});

export const logInFailed = error => ({
  type: LOG_IN_FAILED,
  error
});

export const logInSucceeded = payload => ({
  type: LOG_IN_SUCCEEDED,
  payload: payload
});

export const logOutStart = () => ({
  type: LOG_OUT
});

export const logOutFailed = error => ({
  type: LOG_OUT_FAILED,
  error
});

export const logOutSucceeded = () => ({
  type: LOG_OUT_SUCCEEDED
});

const initialState = {
  isAuthenticated: false,
  error: null,
  userInfo: null
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        userInfo: action.payload,
        isAuthenticated: false
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        error: action.error
      };
    case LOG_IN_SUCCEEDED:
      return {
        ...state,
        userInfo: action.payload,
        isAuthenticated: true
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOG_OUT_SUCCEEDED:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

// async actions
export const logIn = values => async dispatch => {
  dispatch(logInStart());
  try {
    debugger;
    let response = await login(values);

    localStorage.setItem("user", JSON.stringify({ isAuthenticated: true }));
    dispatch(logInSucceeded(response));
  } catch (error) {
    dispatch(logInFailed(error));
  }
};

export const logOut = () => dispatch => {
  dispatch(logOutStart);
  debugger;
  try {
    if (localStorage.getItem("user") !== null) {
      localStorage.removeItem("user");
    }

    dispatch(logOutSucceeded());
  } catch (error) {
    dispatch(logOutFailed(error));
  }
};
