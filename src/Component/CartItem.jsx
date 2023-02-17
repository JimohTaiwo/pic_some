import React from 'react'
import useHover from '../Hooks/useHover'
import { useContext } from 'react'
import {AiOutlineDelete} from "react-icons/ai"
import { Context } from '../Context/Context'
 const CartItem = ({item}) => {
  const [hovered, ref] = useHover()
  const{removeCartItem} = useContext(Context)
  const iconClassName = hovered?"icons del":"icons "
  return (
    <div className='cart-items'>
      <div className='item' ref={ref}>
      <AiOutlineDelete
      onClick={()=>removeCartItem(item)}
      className={iconClassName}
      
      />
      <img src={item.url} alt="" width="150px" height="130px" style={{objectFit:"cover"}}/>
      </div>
      <p>$55.9</p>
    </div>
  )
}

export default CartItem
