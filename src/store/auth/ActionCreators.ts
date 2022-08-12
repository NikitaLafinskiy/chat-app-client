import { AppDispatch } from "store";
import { AuthServices } from "services/auth/AuthServices";
import { authSlice } from "store/auth/AuthSlice";
import { NavigateFunction } from "react-router";

export class AuthActions {
  static register(username: string, password: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthServices.register(username, password);
        dispatch(authSlice.actions.setUser(res.data.user));
        localStorage.setItem("accessToken", res.data.accessUUID);
        localStorage.setItem("refreshToken", res.data.refreshUUID);
      } catch (err) {
        dispatch(
          authSlice.actions.setError(
            "Credentials invalid or the user already exists"
          )
        );
      }
    };
  }

  static login(username: string, password: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthServices.login(username, password);
        localStorage.setItem("accessUUID", res.data.accessUUID);
        localStorage.setItem("refreshUUID", res.data.refreshUUID);
        dispatch(authSlice.actions.setUser(res.data.user));
      } catch (err) {
        dispatch(
          authSlice.actions.setError("An error occured while logging in")
        );
      }
    };
  }

  static restoreUser(nav: NavigateFunction) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthServices.getUser();
        if (res.data.refreshUUID && res.data.accessUUID) {
          localStorage.setItem("accessToken", res.data.accessUUID);
          localStorage.setItem("refreshToken", res.data.refreshUUID);
        }
        dispatch(authSlice.actions.setUser(res.data.user));
      } catch (err) {
        dispatch(
          authSlice.actions.setError("Unable to restore the user, log in")
        );
        nav("/register");
      }
    };
  }
}
