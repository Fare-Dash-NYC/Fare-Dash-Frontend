import '../HomePage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {UncontrolledCarousel} from 'reactstrap'
import {Link} from "react-router-dom"
import React from 'react'
import NavBar from './NavBar';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import { fa-user-police } from '@fortawesome/free-solid-svg-icons'


function HomePage(){


    return(
        
        <div>
           <div className='top-container'>
             <img className='bg-img'  alt="" src='https://brooklyneagle.com/wp-content/uploads/2021/03/AP17172784995527.jpg'/>
             
<div className='mission'>
               <h1>WHERE PEOPLE HELP EACH OTHER</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<Link to={'/explore'} >
<button>
 View Live Reports
</button>
</Link>
</div>

           </div> 
           <div className='facts'>
             <div className='facts-text'>
             
 

             <p>92% of the 481 fare evasion arrests in the fourth quarter of 2019 were of non-whi
               te riders; 60% were black. Data like that led New York Attorney General Letitia James to announce a probe of 
               racial disparities in fare evasion stops. </p>
</div>
<div className='facts-text'>


             <p>Fare evasion is in large part “a function of poverty and inconvenience.” People arrested for fare evasion 
               rely on public defenders, a pretty good sign they are struggling to make ends meet.
               <FontAwesomeIcon icon="fa-solid fa-brain" />
               </p>
               </div>
               <div className='facts-text'>
               <FontAwesomeIcon icon="fa-solid fa-bell" />
              <p>Antiquated broken windows policing strategies that crimilize 
                the poor at the turnstile do not begin to address any of the root 
                problems playing out at the turnstile. They do not make transit more affordable.
                They do not make it easier for riders to pay. They do  not reduce police bias,
                but rather enable.

              </p>
              </div>
           </div>
           <div className='stats'>
             <div className='stat1'>
               <h4>1,000+ </h4>
               <h4>Alerts</h4>
             </div>
             <div className='stat2'>
               <h4>300+</h4>
               <h4>Users</h4>
             </div>
             <div className='stat3'>
          <h4>100+ </h4>
          <h4>Staions</h4>
          </div>
          </div>
          
           <div className='services'>
             <h3>WERE ON A MISSION TO MAKE THE WORLD A BETTER PLACE....</h3>
             <p><b>We believe in public information for the good of the public</b></p>
             <p>By being able to act on real time alerts low income mta riders are to be aware of police presence in subway stations to avoid high fines. </p>
             <p>We believe in giving people a way to use their phones to be aware and keep each other aware. </p>

           </div> 

           <footer>

           </footer>


        </div>
    )
}

export default HomePage