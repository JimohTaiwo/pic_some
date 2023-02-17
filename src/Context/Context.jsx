import React from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'
import data from '../resources'
import Swal from 'sweetalert2'
const Context =React.createContext()
const ContextProvider = ({children}) => {
  const [allPhotos, setAllPhotos] = useState(data)
  const [cartItems, setCartItems] = useState([])
  const togglefav=(data)=>{
      setAllPhotos(prev=>prev.map(pre=>{
        if(pre.id===data.id){
          return {...pre,isFavorite:!pre.isFavorite,cartItems}
        }
       return pre
      }))
  }

  const addCartItem=(data)=>{
      setCartItems(prev=>[...prev, data])
  }

  const removeCartItem=(data)=>{
      Swal.fire({
        title:"Are you sure",
        text:"YOU SURE WANT TO DELETE ITEM",
        icon:"warning",
        showCancelButton:true,
        confirmButtonColor:"teal",
        cancelButtonColor:"maroon",
confirmButtonText:"Yes  remove item"
      }).then(result=>{
        if(result.isConfirmed){
          setCartItems(prev=>prev.filter(item=>item.id!==data.id))
Swal.fire(
  "Deleted",
  "Item Has Been Removed 😥",
'success'
)
        }
      })
  }
  const emptyCart = ()=>{
    setCartItems([])
  }

  console.log(cartItems)
 
  // const url=`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`
  // const getAllPhotos= async()=>{
  //   const existing =localStorage.getItem("photos")
  //   if (existing){
  //     setAllPhotos(JSON.parse(existing))
  //   }else{
  //     const api=await fetch(urldata)
  //     const data =await api.json()
  //     localStorage.setItem("photos", JSON.stringify(data))
  //     setAllPhotos(data)
  //   }
  //   }
 
  // useEffect(()=>{
  //     getAllPhotos()
  // },[])
  return (
    <Context.Provider value={{
      allPhotos,
      cartItems,
      togglefav,
      addCartItem,
      removeCartItem,
      emptyCart
      }}>
      {children}
    </Context.Provider>
  )
}

export  {ContextProvider, Context}
