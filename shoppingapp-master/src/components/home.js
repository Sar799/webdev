import React from 'react';
import ReactDOM from 'react-dom'; 
import './../style/App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo1 from './../images/Frame_8_1300x.png'
import Logo2 from './../images/i1.png'
import Logo3 from './../images/i2.png'
import Logo4 from './../images/i3.png'
import Logo5 from './../images/i4.png'
import {Link, NavLink } from 'react-router-dom';

function Home() {
  return (
  
  <>
<div className="heading">
<div id="heading1">15% OFF ON ALL NEW CUSTOMERS</div>
</div>

<div className="head2">
  <div className="nav">

<Link to="/course"><button className="btn1">SHOP</button></Link>
<Link to="/course"><button className="btn1">PAINTING</button></Link>
<Link to="/course"><button className="btn1">BLOG</button></Link>
  <button type="submit"><i class="fa fa-search"></i></button>

  </div>

</div>


  
<div className="head3">
  <div className="card">
    <div className="pro1">
<h3>
Shop our high quality art supplies</h3>
<h5 id="style1">Get encouraged to create with confidence while supporting a community of artists</h5>
</div>
<button id="btn2">SHOP NOW</button>
  </div>
</div>

<div className="colorbytes">
  <div>
  <h1>Know exactly which supplies are right for you</h1>
  <h5>Our ColorByFeliks art supplies are tested and used daily by</h5>
  <h5>  artists for artists so you can be encouraged</h5>
  <h5>to create with confidence</h5>
</div>
</div>

<img src={Logo1} className="image"/>
<div className="colorbytes1">
  <div>
  <h1>Save Time</h1>
  <h5>Know that the materials you are buying have first gone</h5>
  <h5>through the hands of some of your favorite artists and</h5>
 <h5> are used by them daily! All of the supplies have been</h5> 
 <h5>tested by artists so you can know they are top quality </h5>
 <h5>and save time trying to sort through which products are high quality</h5>
</div>
<div className="btn2">
<button id="bttn2">Explore products</button>
</div>
</div>

<div className="grid1">
<div className="gridd1">
<h2>Be Encouraged to Create</h2>
<div>Become part of the #colorbyfeliks community of over 2 million people around the world! From our Youtube tutorials, blog posts and art supplies recommended for artists, get tons of FREE resources that will encourage you to get creative</div>
</div>


<div className="gridd2">
<img src={Logo1} id="craft1"/>
<img src={Logo1} id="craft2"/>
<img src={Logo1} id="craft3"/>
<img src={Logo1} id="craft4"/>
</div>


</div>
  </> 
   );
}

export default Home;
