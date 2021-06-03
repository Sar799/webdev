import React from 'react';
import ReactDOM from 'react-dom';
import Course from './course.js'
import Home from './home.js'
import { BrowserRouter, Route } from 'react-router-dom';

function App(){
    return(
    <>
    <BrowserRouter>
    <Route path="/" component={Home} exact/>
    <Route path="/course" component={Course} exact/>
   
    </BrowserRouter>
    </>
    )
}
export default App;