import React from "react";
import styles from "./ImgBtn.module.css"

const ImgBtn = (props) => (

   <div 
      className={styles.whatever} 
      onClick={props.onClick}
      style={
         {
            backgroundImage: `url(${props.imgurl})`,
            backgroundSize: "contain", margin: "40px"
         }
      }
   />
)

export default ImgBtn;