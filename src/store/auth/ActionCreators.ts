import { AppDispatch } from "store";
import { AuthServices } from "services/auth/AuthServices";
import { authSlice } from "store/auth/AuthSlice";

export class AuthActions {
  static register(username: string, password: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthServices.register(username, password);
        dispatch(authSlice.actions.setUser(res.data.user));
        localStorage.setItem("token", res.data.accessToken);
      } catch (err) {
        dispatch(
          authSlice.actions.setError(
            "An error occured while registering the user"
          )
        );
      }
    };
  }

  static login(username: string, password: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthServices.login(username, password);
        localStorage.setItem("token", res.data.accessToken);
        dispatch(authSlice.actions.setUser(res.data.user));
      } catch (err) {
        dispatch(
          authSlice.actions.setError("An error occured while logging in")
        );
      }
    };
  }

  static restoreUser() {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthServices.getUser();
        dispatch(authSlice.actions.setUser(res.data.user));
      } catch (err) {
        dispatch(
          authSlice.actions.setError("Unable to restore the user, log in")
        );
      }
    };
  }
}
