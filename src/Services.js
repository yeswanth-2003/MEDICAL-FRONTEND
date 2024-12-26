import ambulance from "./images/ambulance.png";
import heart from "./images/frd.png";
import medical from "./images/medical.png";
import rubber from "./images/medical.png";
import bed from "./images/health.png";
import document from "./images/document.png"
import  "./services.css";

function Services(){
    return(

        <div className="paper">
        <div>
        <h1>Our Services</h1>
        </div>
        <div className="cardten">
         
           <div className="first">
            <img src={document} alt=""/>
            <h3>free checkups</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br>Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More</button>
           </div>
           <div className="first">
            <img src={ambulance} alt=""/>
            <h3>24/7 ambulance</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br>Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More</button>
           </div>
           <div className="first">
            <img src={medical} alt=""/>
            <h3>expert doctors</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br> Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More</button>
           </div>
           <div className="first">
            <img src={rubber} alt=""/>
            <h3>expert doctors</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br> Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More</button>
           </div>
           <div className="first">
            <img src={bed} alt=""/>
            <h3>expert doctors</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br> Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More</button>
           </div>
           <div className="first">
           <img src={heart} alt=""/>
            <h3>expert doctors</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br> Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More</button>
           </div>

        </div>
        </div>
        
    )
}

export default Services