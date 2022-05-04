import { AnchorProps } from "types/components/elements";
import { Link } from "react-router-dom";
import { ElementHelpers } from "utils/elements/ElementsHelpers";
import "./Anchor.scss";

function Anchor({ children, to, className, style }: AnchorProps) {
  const classes = ElementHelpers.convertClass("elements__anchor", className);

  return (
    <Link style={style} to={to} className={classes}>
      {children}
    </Link>
  );
}

export default Anchor;
