import './../styles/heading.css'
function Heading(){
    let styles ={
         headingstyle:{
            color:"red",
            backgroundColor:"yellow"
        },
         parastyle: { 
            fontSize:"2rem",
            backgroundColor:"lightblue"
        }
    }
    //  styles.parastyle.fontSize="1rem"; //directly changing css 
    let userRegistered= false;
    let headingclass;
    if(userRegistered)
    {
       headingclass= "main-heading"
    }
    else
    {
        headingclass= "main-heading-2"
    }
    function Handleclick(event){
        console.log("button is click", event.target.id);
    }
    function HandleInutchange(event){
        console.log("typing",event.target.value);
    }
    function handlefocus(event){
        console.log("input is focus");
    }
    // let headingstyle={
    //     color:"red",
    //     backgroundColor:"yellow"
    // }
    // let parastyle{
    //     fontSize:"2rem"
    // }
    return (
    //     <div>
    // // <h1> Welcome to react</h1>
    // <p> React with multiple components option 1</p>
    // </div>
    // <React.Fragment>
    //    <h1> Welcome to react</h1>
    //  <p> React with multiple components option 2</p>  
    // </React.Fragment>
    // <h1 style={{color:"red",backgroundColor:"yellow"}}> Welcome to react</h1> //inline css
    //<h1 style={headingstyle}> Welcome to react</h1> //ourside css without all styles combined
   // <h1 style={styles.headingstyle}> Welcome to react</h1> //In same file  heading.jsx
  // <h1 className="main-heading"> Welcome to react</h1>  //directly from css
  //There are lot events like onFocus search it on website
  //You can make a class and haven't done anything here
    <>
    <h1 className={headingclass}> Welcome to react</h1>
     <p className="para-style"> React with multiple components option 3</p>  
        <button onClick={Handleclick} id="btn1"> Click me</button>
        <button onClick={Handleclick} id="btn2"> primary</button>
        <input onChange={HandleInutchange} onFocus={handlefocus}/>
        <div>
            <h2>Hope you are understanding React</h2>
            
        </div>
    </>
    )
}
export default Heading;