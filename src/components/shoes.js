import React from 'react';
import shoes from '../assets/assets/image_4.png';
import A from '../assets/assets/group_980.png';
const Shoes = () => {
    return (
        <div className="shoes">
        <div className="pic">
            <img src={A} alt="" />
        <h1>NEXT DROP 01/06/2021</h1>

        </div>    
        
        <div className="shoe">
            <div className="col"><img src={shoes} alt="" /></div>
            <div className="col">
               <div className="paragraphs">
               <p>Travis Scott x Air Jordan 6 “British Khaki’</p>
                <p>Release Date: 30 March 2021</p>
                <p>Retail Price: 250$</p>
                <p>Stockx:400$ - 500$</p>
                <p>Stockx:400$ - 500$ </p>
                <p>Ebay:400$ - 650$</p>
               </div>
            </div>
            
        </div>
        </div>
    )
}

export default Shoes
