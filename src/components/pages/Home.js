import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import samsung from "./../items/samsung.jpg"
import { Rating } from '@mui/material'
import {useStateValue}from "./../pages/Stateprovider"
import { Link, useNavigate } from 'react-router-dom'
function Home({url}) {


    const navigate=useNavigate();
    const [state,dispatch]=useStateValue();
    const[product,setProduct]=useState([]);
const handleClick=(id,price)=>{








dispatch(


{

type:"IMG_CLICK",

product_data:{
    id:id,
    price:price,
}


}
)



}



useEffect(() => {
  

    axios.get(url).then((response)=>{

        setProduct(response.data)
        })

}, [])





  return (
    <div className='home-top'> 

<div className="home">


{product.map((obj)=>{
return(



    <div onClick={()=>{navigate(`/product_details`)}} className='home-product'>

  <div onClick={()=>{handleClick(obj.id,obj.price)}}> 

<img className='home-img' src={ obj ? obj.image:""} alt="img" />
<span className='title'>{obj.title}</span>
<span className="rating"><Rating readOnly name="size-small" defaultValue={obj.rating.rate} size="small" />
</span>

<span style={{color:"black",fontWeight:"bold"}}>₹ {obj.price}.00</span>
<span style={{color:"black"}}>Free delivery over ₹ 200.00</span>
<span style={{color:"black"}}>Full filled by shopyfy</span>
<span style={{color:"orange"}}>Add to cart</span>

</div>
    </div>
)



})}



</div>
<div className="pagination">
<div>
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="/" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="/">1</a></li>
    <li className="page-item"><a className="page-link" href="/home">2</a></li>
    <li className="page-item">
      <a className="page-link" href="/home" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
</div>
    </div>
  )
}

export default Home