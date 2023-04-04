import React from "react"
import Face1 from "./Face1"
import Face2 from "./Face2"
import Face3 from "./Face3"
import Face4 from "./Face4"
import Face5 from "./Face5"
import Face6 from "./Face6"

export default function Die(props) {

  const styles = {
    backgroundColor: props.isHeld? "#59E391" : "white"
  }

  const faceElement = [
  <Face1 styles={styles}/>,
  <Face2 styles={styles}/>, 
  <Face3 styles={styles}/>, 
  <Face4 styles={styles}/>,
  <Face5 styles={styles}/>,
  <Face6 styles={styles}/>
]
  return (
    <div className="die" style={styles} onClick={props.holdDice}>
      {faceElement[(props.value - 1)]}
    </div>
  )
}