import React from 'react'
import Upcoming from './Upcoming';
import p1 from '../assets/assets/image_4.png';

const lastSection = () => {
    return (
        <div className="amir">
          <p className="drops">Upcoming Drops</p>
        
        <div className="upcome">


<div><Upcoming image={p1} text="10 Jan, 2021"/></div>
<div><Upcoming image={p1} text="10 Jan, 2021 " bgcolor="#f54e62"/></div>
<div><Upcoming image={p1} text="10 Jan, 2021" bgcolor="#1485c8"/></div>
</div>
      
        </div>
    )
}

export default lastSection
