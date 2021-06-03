import React from 'react';
class Headingclass extends React.Component{
    state = {
       counter: 1,
       heading:"Welcome to react",
       inputText:""
    };
    //could use super and then constructor
    handleclick= ()=>{
        let localcounter=this.state.counter;
        this.setState({
            counter:localcounter+1
        })
    }
    handlechange=(event)=>{
        this.setState({
            inputText: event.target.value
        })
    }
    render(){
        return(
        <>
        <h1 >Welcome to react</h1>
        
         <p> React with multiple components option 3</p>  
            <button onClick={this.handleclick.bind(this)}> Click me</button>
            <p>{this.state.counter}</p>
            <input onChange={this.handlechange}/>
            <p>{this.state.inputText}</p>
        </>
        );
}
}
export default Headingclass;
//class is state
//function is stateless