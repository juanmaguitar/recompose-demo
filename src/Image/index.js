import React from "react";
import cx from "classnames";
import { compose, withProps } from "recompose";
import withLoadingstate from "./hoc/withLoadingState";
import "./styles.css";

const BASE_CLASS = "react-Image";

const Image = ({
  src,
  spinner: Spinner,
  handleLoad,
  loading,
  placeholderStyle
}) => {
  const loaded = loading !== false;

  const _classNames = cx(BASE_CLASS, ("is-loaded": loaded));

  console.log({ src, loading, handleLoad, placeholderStyle });
  return (
    <figure style={placeholderStyle} className={_classNames}>
      <img alt="" src={src} className={BASE_CLASS} onLoad={handleLoad} />
      {Spinner && loading && <Spinner />}
    </figure>
  );
};

export default compose(withLoadingstate)(Image);
