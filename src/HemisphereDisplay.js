import React from 'react';
import North from './Image/northern-hemisphere.png';
import South from './Image/SouthernHemisphere.jpg';
import './Styling.css';
const HemisphereConfig={
  Northern:{
    text:"Northern-Hemisphere",
    picture:North
  },
  Southern:{
    text:"Southern-Hemisphere",
    picture:South
  }
}
const HemisphereDisplay=(props)=>{
  const hemisphere = props.latitude > 0 ? HemisphereConfig.Northern:HemisphereConfig.Southern;
  return(
    <div className={hemisphere.text}>
      <div className='ui raised text container segment'>
        <div className='image'>
          <img height={"400px"} width={'666px'} src={hemisphere.picture} alt={hemisphere}/>
        </div>
        <div className='ui teal bottom attached label'>
          <h1>You are in {hemisphere.text}</h1>
        </div>
      </div>
      
    </div>
  )
}

export default HemisphereDisplay;