import { compose, withHandlers, withState } from "recompose";

export default compose(
  withState("loading", "setLoadingState", true),
  withHandlers({
    handleLoad: props => e => {
      setTimeout(() => props.setLoadingState(false), 3000);
    }
  })
);
