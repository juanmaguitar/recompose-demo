import React from "react";
import { render } from "react-dom";

import Spinner from "react-spinner";
import 'react-spinner/react-spinner.css'

import './styles.css'

import Image from "./Image";

const imageSrc = "https://picsum.photos/5000?image=980";
const imageSrcBad = "https://pics___um.photos/5000?image=980";

const App = () => (
  <div className='App'>
    <div className="imageContainer">
      <Image name="CodeSandbox" spinner={Spinner} src={imageSrc} />
    </div>
    <div className="imageContainer">
      <Image name="CodeSandbox" spinner={Spinner} src={imageSrcBad} />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
