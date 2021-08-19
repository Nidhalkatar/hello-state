import React from "react";
import Counter from "./counter";
import "./App.css";

class App extends React.Component{
  constructor(){
    super ();
    this.state ={
       Student :{
        fullName : "Nidhal katar",
        imgSrc: "./nidhal2.jpg",
        bio : "hello i'm a mechanical engineer trying to be a good developer.",
        profession : "Student"
      },
      
    };
  }
  showFunction(){
    this.setState({show : !this.state.show,});
  }
 
  render(){
    return(
      <div className="App">
        <button onClick={()=>
          {this.showFunction()}}>{this.state.show==true?"hide":"show"}</button>
           <div>
          {this.state.show == true ? (
            <div  style={{ width: "1350px",height:"820px",backgroundImage:`url("https://c4.wallpaperflare.com/wallpaper/135/524/987/jaguar-big-cute-wild-cat-desktop-hd-wallpaper-for-mobile-phones-tablet-and-pc-3840%C3%972160-wallpaper-preview.jpg")`}}>
              <Counter/>
              <img  style={{ width: "330px",height:"400px",marginTop:"5%",borderRadius: "5%"}} 
        
       src={this.state.Student.imgSrc}/>
      
                <h1 style={{ color: "orange" }}>{this.state.Student.fullName}</h1>
                <h2 style={{ color: "orange" }}>{this.state.Student.bio}</h2>
                <h2 style={{ color: "orange" }}>{this.state.Student.profession}</h2>

            </div>
          ) : null}
        </div>
      </div> 


    );
  }
}
export default App;
