import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import shop from "./items/shop.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useStateValue } from './pages/Stateprovider';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Header() {







  const [state,dispatch]=useStateValue();

  const [text, setText] = useState("")
  const [data,setData]=useState([])
const handleSearch=()=>{





dispatch(
{
type:"SEARCH_CONTENT",

product_data:{


text:text


}



}


)


    


}

  const[{basket}]=useStateValue();


  console.log(text)
  return (
    <div className='header-top'> 

<div className="header">
<a href='/'><h3 style={{fontSize:"3rem",marginTop:"2.3rem",color:"orange"}}>SHOPYFY</h3></a>
<img  className="img" src={shop}alt="img" />


<div className="srh-box">


    <input onChange={(e)=>setText(e.target.value)} placeholder='Search for products,brands & more' className='box' type="text" 
    />
   <div  onChange={(e)=>{setText(e.target.value)}} onClick={handleSearch}  className="icon"><SearchIcon/></div>
    <div className="category">
        
 <a href='/homes'><li >MEN </li> </a>
<a href='/women'><li>WOMEN</li></a>
<a href='/electronics'><li>ELECTRONICS</li></a>
<a href='/jewelery'><li>JEWELLERY</li></a>
<li>TOYS</li>
<li>GROCERY</li>
<li>TOYS</li>
<li>MOBILES</li>

<a href='/sort'><div className="filter">
<select style={{color:"red",fontWeight:"bold",borderRadius:"5px"}}>
    

<option    value="FILTER">FILTER</option>


</select>
</div></a>
    </div>
</div>
<div className="profile">

    <div>
<AccountCircleIcon style={{fontSize:"2rem",marginLeft:"4rem",marginTop:"1.9rem"}}/>
<span  style={{fontSize:"small",marginLeft:"4rem",marginTop:"0.3rem",color:"white"}}>profile</span>
</div>
</div>

<div className="cart">
<div>
<ShoppingCartCheckoutIcon style={{fontSize:"2rem",marginLeft:"10rem",marginTop:"1.9rem"}}/>
<Badge style={{marginTop:"-1.5rem",marginRight:"-0.2rem"}} badgeContent={basket.length} color="primary">
  <MailIcon color="action" />
</Badge>
<span  style={{fontSize:"small",marginLeft:"10.2rem"}}>cart</span>
</div>
</div>
</div>



    </div>
  )
}

export default Header