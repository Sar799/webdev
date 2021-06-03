import React from 'react';
import Course from './course.js'
import Home from './home.js'
import Shop from './shop.js'
import { BrowserRouter, Route } from 'react-router-dom';

function App(){
    return(
      <BrowserRouter>
   <Home/>  
   </BrowserRouter>
    )
}
export default App;