import { AuthWrapperProps } from "types/components/layouts.d";
import "./AuthWrapper.scss";
import { useAppSelector } from "hooks/redux.hooks";

function AuthWrapper({ children }: AuthWrapperProps) {
  const { isMobile } = useAppSelector((state) => state.screenReducer);

  return (
    <div className={`layouts__auth-wrapper`}>
      <div>{children}</div>
    </div>
  );
}

export default AuthWrapper;
