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

  return (
    <div className={classNames}>
      <figure style={placeholderStyle} className={`${BASE_CLASS}-figure`}>
        <img
          alt=""
          src={src}
          className={`${BASE_CLASS}-image`}
          onLoad={handleLoad}
          onError={handleError}
        />
      </figure>
      {loading && Spinner && <Spinner className={`${BASE_CLASS}-spinner`} />}
      {error && <Error className={`${BASE_CLASS}-error`} msg="Image couldn't be loaded" />}
    </div>
  );
};

export default compose(withLoadingState, withErrorState)(Image);
