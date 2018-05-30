import { compose, withHandlers, withState } from "recompose";

export default compose(
  withState("error", "setErrorState", false),
  withHandlers({
    handleError: props => e => {
      props.setErrorState(true);
      props.setLoadingState && props.setLoadingState(false);
    }
  })
);
