import { Auth, Chat } from "components/templates";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import LandingPage from "./index";

export function Routes() {
  return (
    <Switch>
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<Auth isSignUp={false} />} />
      <Route path='/login' element={<Auth isSignUp={true} />} />
      <Route path='/chat' element={<Chat />} />
    </Switch>
  );
}
