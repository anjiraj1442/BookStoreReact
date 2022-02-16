import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Displaycart from '../../components/displaycart/Displaycart'
import { CartService } from '../../Service/CartService'
import './Cart.css'

export default function Cart() {

  const [ quantity , setQuantity ] = React.useState(0)
  const [cart, setcart]= React.useState(0)
  React.useEffect(()=>{
      getCart()
  },[])
  const getCart = () =>{
       console.log("cards");
    CartService.getcart().then((result)=>{
     console.log(result); 

     
     setQuantity(result.data.data.lenght)
     setcart(result.data.data)
    }).catch(()=>{
         console.log("error");
    })
  }



  return (
    <div className='cart'>
  <Header  quantity={quantity}/>
  <Displaycart  cart={cart} quantity={quantity}  getCart={getCart} />
  <Footer />

    </div>
  )
}
