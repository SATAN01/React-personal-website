import React from 'react'
import {Link,BrowserRouter as Router} from 'react-router-dom'
import img from "./images/github.png"
import img2 from "./images/stack.png"
export const Home = () => {
    return(
    <div>
        <h3 className= "my-4"><font face="fira code" size="6"color = "white" className = "mx-2 my-4 px-2" >Hello, my name is <span class ="span"> <span className = "letter">S</span><span className = "letter">h</span><span className = "letter">o</span><span className = "letter" >u</span><span className = "letter">r</span><span className = "letter">y</span><span className = "letter">a</span></span></font></h3>
        <p><font face="fira code" size="4" color = "white" className = "mx-2 my-4 px-2" >I'm a Student, a <span class ="spansub">Pythonista</span>, a <span class ="spansub">Networking guy</span> and looking forward to learn <span class ="spansub">React native</span></font></p>
        <p><font face="fira code" size="4" color = "white" className = "mx-2 my-4 px-2" >On the internet, I'm known as Copyright(C)</font></p>
        <button type="button" className="mybutton btn btn-info my-3" style = {{width : "120px",}}>View</button>
        <br/>
        <a href="https://github.com/SATAN01" target="_blank">
        <button class= "mx-2 my-4"style = {{borderRadius : "50%",height : "58px",width:"58px",backgroundColor : "white"}}><img src={img}/></button>
        </a>  
        <a href="https://stackoverflow.com/users/13845215/copyrightc" target="_blank"> 
        <button style = {{borderRadius : "50%",height : "58px",width:"58px",backgroundColor : "white"}}><img src={img2}/></button>
        </a>
    </div>
)}

//<a href="https://github.com/SATAN01"target="_blank"><img src = "https://img.icons8.com/plasticine/2x/github.png"></img></a>