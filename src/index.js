import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { addCharacterById } from "./actions";

const store = createStore(rootReducer);
console.log("store.getState() es ", store.getState());
store.subscribe(() => console.log("store ", store.getState()));
store.dispatch(addCharacterById(2));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
