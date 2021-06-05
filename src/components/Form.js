
import React from 'react';
import Button from './Button';
import A from '../assets/assets/group_980.png';

const Form = () => {
    return (
        <div>
            <p className="signin">Sign in now!</p>
            <div className="fields">
                <div className="name">
                    <input type="text" placeholder="Full name" />
                </div>
                <div className="dropdown">
                    <select>
                        <option value="">Shoes Size </option>
                        <option value="">fasfjksd</option>
                        <option value="">fasfjksd</option>
                        <option value="">fasfjksd</option>
                    </select>
                     </div>
            </div>
            <div className="btncomponent">
                <div>
                <Button btnText='Buy ticket' btnType="secondary" />
                </div>
                <div className="image2">
                <img src={A} alt="" />
                </div>
                
                
            </div>
        </div>
    )
}

export default Form
