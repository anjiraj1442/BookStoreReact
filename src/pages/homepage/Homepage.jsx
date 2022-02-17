import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Homepage.scss'
import order from '../../Assets/order.jpg'
import order2 from '../../Assets/order1.jpg'


export default function Homepage() {
  return (
     <div className='header'>
     <Header />
     <div className='body_content'>
         <div className='section-1'>
             <div className=''>
                 <img src={order} alt='image1' />
             </div>
             <h2>Order Placed Successfully</h2>
             <div className=''>
                 <img src={order2} alt='image2' />
             </div>
             <div>
                 hurry!!! your order is confirmed <br />
                 the order id is #123456 save the order id for <br />
               further communication..
             </div>
         </div>
         <div className='section-2'>
             <div className='contents1'>
                 Email us
                 Contact us
                 Address
             </div>
             <div className='contents2'>


             </div>
         </div>
         <div className='section-3'>
             <button className='buttonq'>CONTINUE SHOPPING</button>
         </div>
         
     </div>
     <Footer />
 </div>
  )
}
