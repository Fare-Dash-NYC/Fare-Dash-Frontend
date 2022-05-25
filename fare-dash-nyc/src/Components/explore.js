import { useState, useEffect } from 'react';
import '../Explore.css'

import Map2 from './Map2';
import PostBoard from './PostBoard';



function Explore(){
    const [fetchedStations, setfetchedStations] = useState([])
    const [inputText, setInputText] = useState('')
    const [suggestions, setsuggestions] = useState([])
    useEffect(()=>{
        fetch('https://data.cityofnewyork.us/resource/kk4q-3rt2.json')
        .then(resp => resp.json())
        .then(data =>  {
           data.map(stat => {
let stationname = stat.name
setfetchedStations(stationname)

           })

        })
    },[])
    function handleOnChange(inputText) {
        let matches = []
         
        if(inputText.length > 0){
             matches = fetchedStations.filter(name => {
                 const regex = new RegExp(`${inputText}`,'gi')
                return name.match(regex)
             })

        }

console.log(matches)
setsuggestions(matches)
setInputText(inputText) 
    }


    return(
        <div>
            <div className='container'>
                <div className='reports'>
                
      
       <input onChange={e => handleOnChange(e.target.value)}
       value={inputText}
        type='text' 
        placeholder='search for a station' 
       ></input>

<PostBoard/>
       {/* <RenderReports/> */}
      
</div>

<Map2/>

</div>

        </div>
    ) 
}
export default Explore