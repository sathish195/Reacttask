import React, { useState } from "react";
import Draggable from 'react-draggable';

import './index.css'

function Logo(){

    const [open,setOpen]=useState(false)
    const handleClickOpen=()=>{
        setOpen(true)
    }
    const closePopup=()=>{
        setOpen(false)
    }
    return(
    <div className="all-background">
        <div className="pt-5 pb-5 bg-dark">

<div className="container-fluid p-2 bg-light">
    
<div className="row">
<div className="header">
    <button onClick={handleClickOpen} type="button" className="btn btn-primary save-button">save</button>
</div>
</div>
</div>
<hr className="under-line" />

<div className="row container-height">
<div className="col-sm-3 col-md-3 col-lg-3 bg-secondary mt-4">
    
    <div className="all-cards">
<div className="card card-body ">
 
</div>
<div className="card card-body">
 
</div>
<div className="card card-body">

</div>
<div className="card card-body">
 
</div>
<div className="card card-body">
 
</div>
<div className="card card-body">

</div>
<div className="card card-body">
 
</div>
<div className="card card-body">
 
</div>
<div className="card card-body">

</div>


</div>
 


    
</div>

<div className="col-sm-6 col-md-6 col-lg-6 bg-info ">

<div className="final-div">
    {
           open?
           <div className="main">
              <Draggable>

               <div className=" popup">
                   <div className="popup-header">
                      
                       <h6 onClick={closePopup} className="cancel-icon"><i class="fa fa-close"></i></h6>
                   </div>
                   <div>
                
                   
                   
                   </div>
               </div>
              </Draggable>

              
            </div>:""
 
          
        
    }
</div>


</div>
<div className="col-sm-3 col-md-3 col-lg-3 bg-success ">
</div>
</div>
</div>   
</div>
    )
}

export default Logo