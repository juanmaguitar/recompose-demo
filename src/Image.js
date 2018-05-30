import React from "react";
import { compose, withHandlers, withState } from "recompose";

const enhance = compose(
  withState("loading", "setLoadingState", true),
  withHandlers({
    handleClick: props => e => {
      console.log(props);
    },
    setLoadingState: stateLoading => ({
      loading: stateLoading
    }),
    handleLoad: props => e => {
      props.setLoadingState(false);
      console.log(props);
    }
  })
);

const imgStyles = {
  objectFit: "cover",
  width: "100%",
  height: "100%"
};

const Image = ({ src, name, handleClick, handleLoad }) => (
  <div>
    <p onClick={handleClick}>Hello {name}!</p>
    <img src={src} style={imgStyles} onLoad={handleLoad} />
  </div>
);

export default enhance(Image);
