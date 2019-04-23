import React from "react";
import styles from "./ImgBtn.module.css"

const ImgBtn = (props) => (

   <div 
      className={styles.whatever} 
      style={{backgroundImage: `url(${props.imgurl})`,
      backgroundSize: "contain"}}
      onClick={props.clickHandler}
   >
   </div>
)




export default ImgBtn;