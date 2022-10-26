import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './components/pages/Home'
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import "./App.css"
import Product_details from './components/pages/Product_details'
import Search_content from './components/pages/Search_content'
import {ur,url,urls,women,jewelery,electronics,sort}from "./components/items/Url"
import { useStateValue } from './components/pages/Stateprovider'

function App() {




  return (
    <div>




<Header/>

<Router>

<Routes>
<Route path='/'


element={<Home url={url}/>} />

<Route path='/home'


element={<Home url={ur}/>} />



<Route path='/homes'


element={<Home url={urls}/>} />



<Route path='/women'


element={<Home url={women}/>} />

<Route path='/jewelery'


element={<Home url={jewelery}/>} />

<Route path='/jewelery'


element={<Home url={jewelery}/>} />

<Route path='/electronics'


element={<Home url={electronics}/>} />



<Route path='/sort'


element={<Home url={sort}/>} />







<Route path='/product_details'


element={<Product_details/>} />




<Route path='/search_content'


element={<Search_content/>} />








</Routes>




</Router>





    </div>
  )
}

export default App