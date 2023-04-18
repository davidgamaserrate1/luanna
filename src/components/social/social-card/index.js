import React from "react";
import './social-card-styles.css'

const SocialCard = (props) =>{
    const cor = props.color
    return (
        ({cor} === 'rosa' ? (
            <div className="social-card rosa" >
                {props.name}
            </div>
        ) :
            <div className="social-card branco" >
                {props.name}
            </div>)
    )   
}

export default SocialCard