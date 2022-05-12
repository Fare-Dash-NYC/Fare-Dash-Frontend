import '../HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {UncontrolledCarousel} from 'reactstrap'
import {Link} from "react-router-dom"


function HomePage(){


    return(
        
        <div>
            <Link to={'/explore'}>
            <button className='report-btn'>
                VIEW LIVE REPORTS HERE
            </button>
            </Link>

           <div className="mission-section">
               <h1>MISSION STATEMENT</h1>
           <p>If low-income public transit users had access to resources that helped with MTA fares and were made aware of cop presence in the subways, fewer people will suffer from police harassment and high fines.
Mission Statement:
Fare Dash is a platform that provides real-time updates of reported police sightings at stations, and direct donations to provide metro cards to eligible users. </p>
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
      src: 'https://cms.prod.nypr.digital/images/300412/fill-1200x650/'
    },
    {
    //   altText: 'Slide 3',
    //   caption: 'Slide 3',
      key: 3,
      src: 'https://static01.nyt.com/images/2019/12/22/opinion/22mta/merlin_163624677_5df8342e-7237-4d3e-aec5-6b822f44f4cf-superJumbo.jpg'
    }
  ]}
 />
           </div>
           <div className='fcats'>
          
           <script src="https://kit.fontawesome.com/66c973f71a.js" crossorigin="anonymous"></script>
 
           <FontAwesomeIcon icon="fa-solid fa-heart" />
           </div>


        </div>
    )
}

export default HomePage