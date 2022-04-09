import { AppDispatch } from 'store';
import { AuthServices } from 'services/auth/AuthServices';
import { authSlice } from 'store/auth/AuthSlice';

export class AuthActions {
  static register(username: string, password: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthServices.register(username, password);
        dispatch(authSlice.actions.setUser(res.data.user));
      } catch (err) {
        dispatch(
          authSlice.actions.setError(
            'An error occured while registering the user'
          )
        );
      }
    };
  }

  static login(username: string, password: string) {
    return async (dispatch: AppDispatch) => {
      try {
        const res = await AuthServices.login(username, password);
        dispatch(authSlice.actions.setUser(res.data.user));
      } catch (err) {
        dispatch(
          authSlice.actions.setError('An error occured while logging in')
        );
      }
    };
  }
}
