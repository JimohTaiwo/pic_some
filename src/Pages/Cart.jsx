import React,{useContext, useState} from 'react'
import CartItem from '../Component/CartItem'
import {Context}  from '../Context/Context'
import Swal from 'sweetalert2'
const Cart = () => {
  const {cartItems, emptyCart} = useContext(Context)
  const [buttonText, setButtonText] = useState("Place order")
  const placeOrder=()=>{
    setButtonText("Ordering item...")
    setTimeout(()=>{
      // setButtonText("Place Order")
      Swal.fire(
          {
            position:"center",
            icon:"success",
            title:"Items has been orderd",
            showConfirmButton:false,
            timer:2500
          }
      )
      emptyCart()
    },2000)
  }
  return (
    <div>
      <main className='cart-page'>
        <h1>Check Out</h1>
        {cartItems.length?(cartItems.map((item,i)=><CartItem key={i} item={item}/>)):<h2>EMPTY CART </h2>}
        {cartItems.length >0 &&<div className="order-button">
          <button className='button' onClick={()=>placeOrder()}>{buttonText}</button>
        </div>}
      </main>
    </div>
  )
}

export default Cart
