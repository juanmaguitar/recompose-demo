import React from "react";
import { render } from "react-dom";
import Image from "./Image";

const imageSrc = "https://picsum.photos/4000?image=980";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Image name="CodeSandbox" src={imageSrc} />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
