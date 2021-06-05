import React from 'react';

const Upcoming = ({bgcolor,image,text}) => {
    return (
        <div> 
            
            <div className="box" style={{backgroundColor:bgcolor}}>
                <div className="pic"><img src={image} alt="" /></div>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Upcoming
