import { compose, withHandlers, withState } from "recompose";

export default compose(
  withState("loading", "setLoadingState", true),
  withHandlers({
    setLoadingState: stateLoading => ({
      loading: stateLoading
    }),
    handleLoad: props => e => {
      props.setLoadingState(false);
      console.log("handleLoad!");
      console.log(props);
    }
  })
);
