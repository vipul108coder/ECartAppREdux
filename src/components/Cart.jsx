import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';

 


const Cart = () => {

  const dispatch = useDispatch();
  const {cartItems, subtotal, tax, shipping, total} = useSelector(state=>state.cart);
  
  const increment = (id)=>{
    dispatch({
      type:"addToCart", 
      payload:{id},
    })
    dispatch({
      type:"calculatePrice",
    })
  }


  const decrement = (id)=>{
    dispatch({
      type:"decrement", 
      payload:id,
    })

    dispatch({
      type:"calculatePrice",
    })
  }

  const deleteHandler = (id)=>{
    dispatch({
      type:"deleteFromCart",
      payload:id,
    })
    dispatch({
      type:"calculatePrice",
    })
  }

  return (
    <div className='cart'>
        <main>
{
  cartItems.length > 0 ? (
     cartItems.map((i)=>(
      <CartItem  imgSrc={i.imgSrc}
name={i.name} price={i.price}
qty={i.quantity}  
 id={i.id}
 key={i.id}
 decrement={decrement}
 increment={increment}
 deleteHandler={deleteHandler}
/>
     ))
  ):(<h1>No Item Select</h1>
)}
</main>



   <aside>
    <h2>Subtotal:  ${subtotal} </h2>
    <h2>Shipping: ${shipping}</h2>
    <h2>Tax: ${tax}</h2>
    <h2>total: ${total}</h2> 

   </aside>


    </div>
  )
}



const CartItem = ({imgSrc, name, price, qty, decrement, increment, deleteHandler, id})=>(

     <div className='cartItem'>
       <img src={imgSrc} alt="Item" />

       <article>
        <h3>{name}</h3>
        <p>${price}</p>
       </article>


<div>
    <button onClick={()=>decrement(id)}>-</button>
    <p>{qty}</p>
    <button onClick={()=>increment(id)}>+</button>
</div>


<AiFillDelete onClick={()=>deleteHandler(id)}/>

     </div>

)

export default Cart