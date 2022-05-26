import '../HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
// import {image1, image2, image3} from './Images/Hompepage.js'
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import {Carousel} from 'react-bootstrap'
import './color.png'

function HomePage(){
    return(
        <div>
           <div className='top-container'>
<div className='carousel'>


</div>





             {/* <img className='bg-img'  alt="" src='https://assets.teenvogue.com/photos/5de958477c5a7e0008756457/3:2/w_4392,h_2928,c_limit/GettyImages-462477089.jpg'/> */}
<div className='top'>
  <div className='mission-text'>
          <h1>WHERE PEOPLE HELP EACH OTHER</h1>
               <p>We believe in sharing information in real time for the good of the public. Through  our app, we hope to keep our community informed of police presence in train stations.
</p>   
<div style={{ marginTop:'70px'}}>
<Link to={'/explore'} >
<button>
 View Live Reports
</button>
</Link>
</div>
</div>
<div className='mission-img'>
  
<img className='img2'
src={require ('./Rectangle.png')}/>
<img className='img' src='https://cdn.vox-cdn.com/thumbor/5B0tpGiowq2KI9tHw4p4QRFIrRA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/66075646/akrales_190528_3453_0099.0.jpg'/> 
</div>
</div>


           </div> 
           <div className='container'>
           <div className='facts-container'>
             <div className='gif'>
               <img style={{width:'200px', height:'200px', marginRight:'400px'}} alt="" src='https://media.giphy.com/media/Q2JRHHzmMw4SSFk0dv/giphy.gif'/>
             {/* <iframe src="https://giphy.com/embed/Q2JRHHzmMw4SSFk0dv" width="600" height="200" frameBorder="0"  allowFullScreen></iframe> */}
             <div>
       <p>
  92% of the 481 fare evasion arrests in the fourth quarter of 2019 were of non-white riders; 60% were black. Data like that led New York Attorney General Letitia James to announce a probe of 
               racial disparities in fare evasion stops. 
  </p>
  </div>
</div>

<div className='gif' style={{marginTop:"150px"}}>
              <p>
              Fare evasion is in large part “a function of poverty and inconvenience.” People arrested for fare evasion rely on public defenders, a pretty good sign they are struggling to make ends meet.
  </p>    
             <div>
             <img alt="" style={{width:'200px', height:'200px', marginLeft:'400px'}} src='https://media.giphy.com/media/Q2JRHHzmMw4SSFk0dv/giphy.gif'/>
  </div>
</div>
<div className='gif'  style={{marginTop:"200px"}}>

          <img  alt=""style={{width:'200px', height:'200px',marginRight:'400px'}} src='https://media.giphy.com/media/Q2JRHHzmMw4SSFk0dv/giphy.gif'/>
          
             <div>
       <p>
       Antiquated broken windows policing strategies that crimilize 
                the poor at the turnstile do not begin to address any of the root 
                problems playing out at the turnstile. They do not make transit more affordable.
                They do not make it easier for riders to pay. They do  not reduce police bias,
                but rather enable.
  </p>
  </div>
</div>
</div>
</div>

{/* <div className='facts'>
 
  <p>
  Fare evasion is in large part “a function of poverty and inconvenience.” People arrested for fare evasion rely on public defenders, a pretty good sign they are struggling to make ends meet.
  </p>
  <p> Antiquated broken windows policing strategies that crimilize 
                the poor at the turnstile do not begin to address any of the root 
                problems playing out at the turnstile. They do not make transit more affordable.
                They do not make it easier for riders to pay. They do  not reduce police bias,
                but rather enable.</p>

</div> */}




           {/* <CardGroup>
  <Card>
    <Card.Img variant="top"/>
    <Card.Body>
      <Card.Title>Know what’s happening so you and your loved ones can stay safe.</Card.Title>
      <Card.Text>
      92% of the 481 fare evasion arrests in the fourth quarter of 2019 were of non-white riders; 60% were black. Data like that led New York Attorney General Letitia James to announce a probe of 
               racial disparities in fare evasion stops. 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top"/>
    <Card.Body>
      <Card.Title>Always know when the cops are at the stations.</Card.Title>
      <Card.Text>
      Fare evasion is in large part “a function of poverty and inconvenience.” People arrested for fare evasion rely on public defenders, a pretty good sign they are struggling to make ends meet.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top"/>
    <Card.Body>
      <Card.Title> Get safety report in real time</Card.Title>
      <Card.Text>
      Antiquated broken windows policing strategies that crimilize 
                the poor at the turnstile do not begin to address any of the root 
                problems playing out at the turnstile. They do not make transit more affordable.
                They do not make it easier for riders to pay. They do  not reduce police bias,
                but rather enable.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>  */}
           
        </div>
    )
}

export default HomePage