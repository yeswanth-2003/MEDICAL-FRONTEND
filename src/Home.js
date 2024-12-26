import testSvg from "./images/download.png";
import media from "./images/doctorr.png";
import friend from "./images/frd.png";
import bed from "./images/bed.png";
import  hospi from "./images/health.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Homee.css";


function Home (){
    return(
        <div className="home-main container">
        <div className="home">
             <div className="image">
        <img src={testSvg} alt=""/>
        </div>
        <div className="contentone">
            <h2>Stay Safe, Stay<br></br> Healthy</h2>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.<br></br> Rem Sed Autem Vero? Magnam, Est Laboriosam!</p>
            <button>Contact Us</button>
     
      </div>

        </div>
        
        <div className="boxes">
          <div className="second">
            <img src={media} alt=""/>
            <h3>140+</h3>
            <p>doctors at work</p>
        </div> 
        <div className="second">
            <img src={friend} alt=""/>
            <h3>1040+</h3>
            <p>satisfied patients</p>
        </div> 
        <div className="second">
            <img src={bed} alt=""/>
            <h3>500+</h3>
            <p>bed facility</p>
        </div> 
        <div className="second">
            <img src={hospi} alt=""/>
            <h3>80+</h3>
            <p>available hospitals</p>
        </div> 
        </div>
        </div>
       
         
    )
     
}

export default Home;

