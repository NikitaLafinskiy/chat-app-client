import { WrapperProps } from "types/components/layouts";
import "./ConversationsWrapper.scss";

function ConversationsWrapper({ children }: WrapperProps) {
  return <div className={`layouts__conversations-wrapper`}>{children}</div>;
}

export default ConversationsWrapper;
