import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useStateValue } from './Stateprovider';
import "./Search_content.css"
import { Rating } from '@mui/material';
function Search_content() {
    const[data,setData]=useState([]);
    const [{basket}]=useStateValue();


useEffect(() => {
 

    axios.get(`https://fakestoreapi.com/products/category/${basket.length==1?basket[0].product_data.text:"jewelery"}`).then((response)=>{

console.log("ithnu axios",data?data:"")
setData(response.data)

    })
}, [])




  return (
    <div className='search-top'>


<div className="search">




{data.map((obj)=>{

return(

<div>


<img src={obj.image} alt="" className='image' />


<span style={{maxLines:"200"}}>{obj.title}</span>
<span style={{fontWeight:"bold"}}>₹{obj.price}</span>
<span className="rating"><Rating readOnly name="size-small" defaultValue={obj.rating.rate} size="small" />
</span>
<span style={{maxLines:"200",display:"flex",alignItems:"center"}}>{obj.description}</span>
<span></span>
<span></span>



</div>




)



})}





</div>









    </div>
  )
}

export default Search_content