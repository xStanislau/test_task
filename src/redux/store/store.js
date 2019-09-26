import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../modules/rootReducer";
import thunk from "redux-thunk";
import InitAuthState from "./InitAuthState";

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}

const initialAuthState = InitAuthState();

export default configureStore(initialAuthState);
