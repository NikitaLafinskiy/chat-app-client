import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "store";
import "./styles/globals.scss";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorkerRegistration from "utils/service-worker/serviceWorkerRegistretion";

const store = setupStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
