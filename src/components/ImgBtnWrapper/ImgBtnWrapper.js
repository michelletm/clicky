import React from "react";
import ImgBtn from "../ImgBtn/ImgBtn"
import diamond from "../../images/diamond.png"
import blue from "../../images/blue.png"
import multi from "../../images/multi.png"
import rainbow from "../../images/rainbow.png"
import green from "../../images/green.jpg"
import garnet from "../../images/garnet.jpg"
import topaz from "../../images/topaz.png"
import kiss from "../../images/kiss.png"
import sapphire from "../../images/sapphire.png"
import oval from "../../images/oval.png"


const imgUrls = [
   {id: "a", url: diamond},
   {id: "b", url: blue},
   {id: "c", url: multi},
   {id: "d", url: rainbow},
   {id: "e", url: green},
   {id: "f", url: garnet},
   {id: "g", url: topaz},
   {id: "h", url: kiss},
   {id: "i", url: sapphire},
   {id: "j", url: oval}
]

function shuffle (array){
   const shuffleArray = array.slice()
      var i = 0
         , j = 0
         , temp = null
  
      for (i = shuffleArray.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1))
          temp = shuffleArray[i]
          shuffleArray[i] = shuffleArray[j]
          shuffleArray[j] = temp
      }
      return shuffleArray;
}


const ImgBtnWrapper = (props) => {
   // console.log(props.clickHandler)
   return (
   <div>
      {shuffle(imgUrls).map((imgUrl, index) => 
         <ImgBtn 
         key={imgUrl.id} 
         imgurl={imgUrl.url} 
         onClick={() => props.onClick(imgUrl.id)}
         />
      )}
   </div>
   )
};



export default ImgBtnWrapper