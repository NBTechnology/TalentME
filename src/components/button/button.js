import React from 'react'
import styles from './button.css'
import dubai from 'assets/img/Boton_DUBAI.jpg'

const button = props => {

    let gradient;
    if(props.gradient){
        gradient = "linear-gradient(-180deg, rgba(252,255,252,0.00) 40%, rgba(0,0,0,0.74) 100%)";
    }else{
        gradient = ""
    }

    let content;
    if(props.bg) { 
        content = <div className={props.classes} style={{width:props.width, height:props.height, background: `url(${dubai})` + " center no-repeat",backgroundSize:"100% auto"}}><p>{props.children}</p></div>;
    }else {
        content =  <div className={props.classes} style={{width:props.width, height:props.height}}><p>{props.children}</p></div>;
    }
    //  <div style={{width:props.width, height:props.height}}>{props.children}</div>
return content;
};


export default button;