import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from "react-router-dom"
import Styled from "styled-components"
const Header = () => {
  return (
    <SHeader>
      <Link to="/">
         <h2 style={{color:"blue"}}>Pic Some</h2>
      </Link>
      <Link to="/cart">
         <FaShoppingCart style={{color:"blue"}}/>
      </Link>
    </SHeader>
  )
}


const SHeader = Styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  padding:20px;
  background-color:pink
`


export default Header
