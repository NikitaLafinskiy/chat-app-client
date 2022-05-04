import { WrapperProps } from "types/components/layouts";
import "./MainWrapper.scss";

function MainWrapper({ children }: WrapperProps) {
  return <div className={`layouts__main-wrapper`}>{children}</div>;
}

export default MainWrapper;
