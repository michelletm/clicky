import React from "react";
import styles from "./NavBar.module.css"

const NavBar = (props) => {
   return (
      <div>
         <h1>Gemstone Clicky Game</h1>
         <h1>Score: {props.score} Top Score: {props.highscore}</h1>
      </div>
   )
}


export default NavBar;