import React from "react";
import { render } from "react-dom";
import Spinner from "react-spinner";

import Image from "./Image";

const imageSrc = "https://picsum.photos/5000?image=980";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Image name="CodeSandbox" spinner={Spinner} src={imageSrc} />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
