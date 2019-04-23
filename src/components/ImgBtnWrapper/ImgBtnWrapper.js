import React from "react";
import ImgBtn from "../ImgBtn/ImgBtn"
import diamond from "../../diamond.png"
import redheart from "../../readheart.png"

const imgUrls = [
   {id: "a", url: diamond},
   {id: "b", url: diamond},
   {id: "c", url: redheart},
   {id: "d", url: diamond},
   {id: "e", url: diamond},
   {id: "f", url: diamond},
   {id: "g", url: diamond},
   {id: "h", url: diamond},
   {id: "i", url: diamond},
   {id: "j", url: diamond}
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
   console.log(props.clickHandler)
   return (
   <div>
      {shuffle(imgUrls).map((imgUrl, index) => 
         <ImgBtn 
         key={imgUrl.ID} 
         imgurl={imgUrl.url} 
         onClick={() => props.onClick(imgUrl.id)}
         />
      )}
   </div>
   )
};



export default ImgBtnWrapper