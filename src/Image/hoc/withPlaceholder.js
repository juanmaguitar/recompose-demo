import { compose, withProps } from "recompose";

export default compose(
  withProps(({ placeholder }) => {
    const placeholderStyle = {
      backgroundImage: `url(${placeholder})`
    };
    return {
      placeholderStyle
    };
  })
);
