import React from "react";
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
  console.log({ src, loading, handleLoad, placeholderStyle });
  return (
    <figure style={placeholderStyle}>
      <img alt="" src={src} className={BASE_CLASS} onLoad={handleLoad} />
      {Spinner && loading && <Spinner />}
    </figure>
  );
};

export default compose(withLoadingstate)(Image);
