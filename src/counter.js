import React from "react";

class Counter extends React.Component{
    constructor (props){
    super(props)
    this.state={
        timer:0,
        interval:null
    }}
    componentDidMount(){
        this.setState({
        interval:setInterval(()=>{this.setState({timer:this.state.timer+1})},1000)
        })
    }
render(){
    return(
        <div>
<button onClick={this.state.timer} style={{ width: "60px",height:"20px",backgroundColor:"lightcoral"}}>{this.state.timer}</button>
        </div>
    )
}
}
export default Counter