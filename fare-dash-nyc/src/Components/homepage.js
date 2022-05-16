import '../HomePage.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import {UncontrolledCarousel} from 'reactstrap'
import {Link} from "react-router-dom"
import React from 'react'

// import { fa-user-police } from '@fortawesome/free-solid-svg-icons'


function HomePage(){


    return(
        
        <div>
          <div className='btn-container'>
            <Link to={'/explore'}>
            <button className='report-btn'>
                VIEW LIVE REPORTS HERE
            </button>
            </Link>
            </div>

           <div className="mission-section">
<div className='mission'>
               <h1>MISSION STATEMENT</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<div className='carousel'>
<UncontrolledCarousel
  items={[
    {
    //   altText: 'Slide 1',
    //   caption: 'Slide 1',
      key: 1,
      src: 'https://www.nydailynews.com/resizer/s4xSpKRIWT4rr2Aq_GFNNoIfq2E=/1200x0/left/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/LUMHIN6W4NEQHLHXZI2WPBDH4U.JPG'
    },
    {
    //   altText: 'Slide 2',
    //   caption: 'Slide 2',
      key: 2,
      src: 'https://www.nydailynews.com/resizer/s4xSpKRIWT4rr2Aq_GFNNoIfq2E=/1200x0/left/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/LUMHIN6W4NEQHLHXZI2WPBDH4U.JPG'
    },
    {
    //   altText: 'Slide 3',
    //   caption: 'Slide 3',
      key: 3,
      src: 'https://www.nydailynews.com/resizer/s4xSpKRIWT4rr2Aq_GFNNoIfq2E=/1200x0/left/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/LUMHIN6W4NEQHLHXZI2WPBDH4U.JPG'
    }
  ]}
 />
 </div>
           </div>
           <div className='facts'>
             <div className='facts-text'>
           <FontAwesomeIcon icon="fa-solid fa-bell" />
             <p>92% of the 481 fare evasion arrests in the fourth quarter of 2019 were of non-whi
               te riders; 60% were black. Data like that led New York Attorney General Letitia James to announce a probe of 
               racial disparities in fare evasion stops. </p>
</div>
<div className='facts-text'>
<FontAwesomeIcon icon="fa-solid fa-bell" />
             <p>Fare evasion is in large part “a function of poverty and inconvenience.” People arrested for fare evasion 
               rely on public defenders, a pretty good sign they are struggling to make ends meet.</p>
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


        </div>
    )
}

export default HomePage