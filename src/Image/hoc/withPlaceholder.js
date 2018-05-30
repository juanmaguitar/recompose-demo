import { compose, withProps, mapProps, withPropsOnChange } from "recompose";

export default compose(
  withProps(({ placeholder }) => {
    const placeholderStyle = {
      backgroundImage: `url(${placeholder})`
    };
    return {
      placeholderStyle
    };
  }),
  withPropsOnChange(["loading"], props => {
    const { loading } = props;
    if (!loading) {
      console.log("image loaded!");
      console.log(props);
    }
  })
);
