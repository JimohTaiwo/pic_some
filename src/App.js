import './App.css';
// import { useState } from 'react';
// import Cta from './Components/Cta';
// import withpointlesshoc from './Components/withpointlesshoc';
// import withExtraPropsAdded from './Components/withExtraPropsAdded';
// import withFavouriteNumber from './Components/withFavouriteNumber';
// import Menu from './Components/Menu';
// import Favorite from './Components/Favorite';
// import Example from './Components/Example';
import Header from './Component2/Header';
import {Routes, Route} from "react-router-dom"
import Cart from './Pages/Cart';
import Photos from './Pages/Photos';
function App(props) {
 console.log("hello world ")
  return (
    <>
     
      <Header/>
      <Routes>
        <Route exact path="/" element={<Photos/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>    
     
    </>
  );
}

export default App;
