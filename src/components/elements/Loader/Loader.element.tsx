import { forwardRef } from "react";
import { LoaderProps } from "types/components/elements.d";
import "./Loader.scss";

const Loader = forwardRef<HTMLImageElement | null, LoaderProps>(
  ({ style }, ref) => {
    return (
      <img
        ref={ref}
        className={"elements__loader"}
        style={style}
        src='/images/loading.gif'
        alt='loading...'
      />
    );
  }
);

export default Loader;
