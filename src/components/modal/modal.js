import { Fragment } from "react";
import ReactDOM from 'react-dom';

import classes from './modal.css'
const  ModalOverlay =(props)=>{
    return (

         <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>  

    )      

}

 const Modal =(props)=>{
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> ,document.getElementById('modal'))}
        </Fragment>
    )
 }
 export default Modal;