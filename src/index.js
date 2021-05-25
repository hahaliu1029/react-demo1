import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import {
//   editPerson,
//   addPerson,
//   removePerson,
//   addPersonAsync,
// } from "./index.redux";

import storeRedux from "./redux/index.redux";

const store = createStore(storeRedux, compose(applyMiddleware(thunk)));

// function render() {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App
//         store={store}
//         addPerson={addPerson}
//         addPersonAsync={addPersonAsync}
//         removePerson={removePerson}
//       />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// }
// render();
// store.subscribe(render);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
