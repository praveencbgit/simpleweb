import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Product_details.css"
import { useStateValue } from './Stateprovider';
import shop from "./../items/shop.png"
import { ShapeLine } from '@mui/icons-material';
import { Rating } from '@mui/material';
function Product_details() {
  const[{basket}]=useStateValue();

const [product, setProduct] = useState([])
useEffect(() => {
 
axios.get(`https://fakestoreapi.com/products/${basket[0].product_data.id}`).then((response)=>{

setProduct(response.data)

console.log(">>>>>>>ithu alle",basket[0].product_data.id
);

})



}, [])







    return (
    <div className='product_details-top'>

<div className="left">

<div>
<img src={product?.image} alt="" className="p-img" />


</div>



<div className="right">



<div>
  <span>{product?.category
}</span>
<span>{product?.title}</span>
<span style={{color:"yellow"}}>{product.description
}

</span>
  <span style={{fontWeight:"bold",fontSize:"large",color:"black"}}>₹ {product?.price}</span>
  <span style={{fontSize:"smaller",color:"lightgray"}}>inclusive all taxes</span>
  <span style={{fontSize:"larger",fontWeight:"bolder"}} className="rating"><Rating readOnly name="size-small" defaultValue={1} size="small" />
</span>
<span>Buy Now </span>
<span style={{color:"red"}}>Free delivery with in 4 Days </span>
<span style={{color:"black",fontSize:"small"}}>Full filled by shopyfy</span>
<img src={shop} alt="" className="imgs" />
  </div>
  
  </div>


</div>


    </div>
  )
}

export default Product_details