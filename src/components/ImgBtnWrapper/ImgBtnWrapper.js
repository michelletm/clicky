import React from "react";
import ImgBtn from "../ImgBtn/ImgBtn"
import diamond from "../../diamond.png"

const imgUrls = [
   diamond,
   diamond,
   diamond,
   diamond,
   diamond,
   diamond,
   diamond,
   diamond,
   diamond,
   diamond,
   diamond,
   diamond
]

const ImgBtnWrapper = (props) => (
   <div>
      {imgUrls.map((imgUrl, index) => <ImgBtn key={index} imgurl={imgUrl} clickHandler={props.clickHandler}/>)}
   </div>
)

export default ImgBtnWrapper