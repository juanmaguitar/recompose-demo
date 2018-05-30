import React from "react";
import cx from "classnames";
import { compose } from "recompose";
import { withLoadingState, withErrorState } from "./hoc";
import { Error } from "./components";

import "./styles.css";

const BASE_CLASS = "react-Image";

const Image = ({
  src,
  placeholder,
  spinner: Spinner,
  handleLoad,
  handleError,
  loading,
  error
}) => {
  const placeholderStyle = {
    backgroundImage: `url(${placeholder})`
  };

  const classNames = cx(
    BASE_CLASS,
    placeholder && `${BASE_CLASS}--placeholder`,
    `is-${loading ? "loading" : "loaded"}`,
    error && `is-error`
  );

  // console.log({ src, loading, handleLoad, placeholderStyle });
  return (
    <figure style={placeholderStyle} className={classNames}>
      <img
        alt=""
        src={src}
        className={`${BASE_CLASS}-image`}
        onLoad={handleLoad}
        onError={handleError}
      />
      {loading && Spinner && <Spinner className={`${BASE_CLASS}-spinner`} />}
      {error && <Error />}
    </figure>
  );
};

// const debug = withProps(console.log)

export default compose(withLoadingState, withErrorState)(Image);
