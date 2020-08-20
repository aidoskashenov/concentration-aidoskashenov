import React, {Fragment} from "react";
import { useHistory } from "react-router-dom";

export const Welcome = () => {
  const history = useHistory()
const handleClick = () => {
  history.push("/how-to-play")

}

  return <Fragment>
    <h1>Welcome</h1>
    <button onClick={handleClick}>How To Play</button>
  </Fragment>
}
