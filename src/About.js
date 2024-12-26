import React from 'react'
import img from './images/doctorr.png';
import "./About.css";

const About = () => {
  return (
    <div className="aboutt">
     <center><h1> <span>About</span>  us</h1></center>   
       <div className="img">
        <div  className="image">
        
        
    
        <img src={img}></img>
        </div>
        <div className="content">
        
        <h2>we take care of your healthy life</h2>
        <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Iure <br>
        </br>Ducimus, Quod Ex Cupiditate Ullam In Assumenda Maiores Et Culpa <br></br>
        Odit Tempora Ipsam Qui, Quisquam Quis Facere Iste Fuga, Minus <br></br>Nesciunt.

Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Natus Vero<br></br> Ipsam Laborum Porro Voluptates Voluptatibus A Nihil Temporibus<bt></bt> Deserunt Vel?</p>
<button>Learn More</button>
      </div>


    </div>
    </div>
  )
}

export default About;