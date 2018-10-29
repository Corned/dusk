import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"

import "./Scrollbar.scss"
import "./Index.scss"

import App from "./App"
import store from "./store"

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById("root")
  )
}

render()
store.subscribe(render)