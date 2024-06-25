import {placeholderPropertyObj} from "./properties/placeholderPropertyObj.js"
import {propertyForSaleArr} from "./properties/propertyForSaleArr.js"

//const {propertyLocation, priceGBP, roomsM2, comment, image}  = propertyForSaleArr
const {propertyLocation, priceGBP, roomsM2, comment, image}  = placeholderPropertyObj


let container = document.getElementById("container")



function getPropertyHtml(property, placeholder) {  
  
   if (property === undefined){
       property === placeholder
       
    
container +=`
<section class="card">
    <img src="/images/${image}">
    <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>${priceGBP}</h3>
        <p> ${comment}</p>
        <h3>${roomsM2.reduce((a,b)=>a+b)} m&sup2;</h3>
    </div>
</section>  
  `     
  return container     
       
   }
     else{
         property.forEach(a =>
container +=`
<section class="card">
    <img src="/images/${a.image}">
    <div class="card-right">
        <h2>${a.propertyLocation}</h2>
        <h3>${a.priceGBP}</h3>
        <p> ${a.comment}</p>
        <h3>${a.roomsM2.reduce((a,b)=>a+b)} m&sup2;</h3>
    </div>
</section> 
`
)
return container 
     }   

} 
 
 document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)

//document.getElementById('container').innerHTML=getPropertyHtml(undefined, placeholderPropertyObj)




