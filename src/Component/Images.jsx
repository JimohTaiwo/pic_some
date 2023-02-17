import React from 'react'
import {BsHeart} from "react-icons/bs"
import {FaHeart} from "react-icons/fa"
import {FaShoppingCart} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
// import { useState } from 'react' 
import { Context } from '../Context/Context'
import { useContext } from 'react' 
import useHover from '../Hooks/useHover'
import PropTypes from 'prop-types'
const Images = ({img}) => {
  const{togglefav,addCartItem,cartItems,removeCartItem} = useContext(Context)
  const [hovered,ref] = useHover()
  
  const plusIcon = ()=>{
    const alreadyInCart = cartItems.some(item=>item.id===img.id)
    if(alreadyInCart){
      return <FaShoppingCart style={{color:"blue"}} className='icons plus' 
      onClick={()=>removeCartItem(img)}
     />
    }else if(hovered){
      return <AiOutlinePlus 
  onClick={()=>{
    addCartItem(img)}}
  className='icons plus'/>
      }
  }
  const heartIcon= ()=>{
    if(img.isFavorite){
      return <FaHeart style={{color:"red"}} className='icons heart' 
      onClick={()=>togglefav(img)}/>
    }else if(hovered){
      return <BsHeart className='icons heart' 
      onClick={()=>togglefav(img)
      }/>
    }
  }
  return (
    <div className={img.isFavorite?"fav img":"img"}
    ref={ref}>
     {heartIcon()}
     {plusIcon()}
     
      <img src={img.url} alt="" className="image"/>
    </div>
  )
}

Image.propTypes ={
  img: PropTypes.shape({
    isFavorite:PropTypes.bool,
    id:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
  })
}

export default Images
