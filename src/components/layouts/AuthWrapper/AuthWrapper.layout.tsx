import { AuthWrapperProps } from "types/components/layouts.d";
import "./AuthWrapper.scss";

function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <div className={`layouts__auth-wrapper`}>
      <div>{children}</div>
    </div>
  );
}

export default AuthWrapper;
