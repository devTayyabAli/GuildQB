import React from 'react'
import Modal from 'react-bootstrap/Modal';
import "./Refferal_modal.css"
import copy from "../Assets/copy_icon.svg";
import twiter from "../Assets/soic_twi.svg";
import fb from "../Assets/fb.svg";
import {AiOutlineClose} from "react-icons/ai"


export default function Refferal_modal(props) {
  return (


    // this is the modal component which opens when we click on refferal link 
    <div className='main_refferal_modal'>
       <Modal
      {...props}
      size="lg"
     
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='refff_link'
    >
    
      <AiOutlineClose className='close_btn d-none d-lg-block' onClick={props.onHide}></AiOutlineClose>
   
   {/* modal content is here  */}
   
      <Modal.Body>
        <h4 className='modal_ref'>Your referral link</h4>
        <div className="d-flex modal_input_here ref_copy_main">
                <input
                  type="text"
                  className="copy_inp text-truncate"
                  placeholder="https://guildqb.com/invitation/46504932bcc5526955"
                  name=""
                  id=""
                  disabled
                 
                />
                <button className="ref_copy d-none d-md-flex">
                  {" "}
                  <img src={copy} alt="" /> <p className="copy_text text-white">copy</p>
                </button>
                <button className="ref_copy  d-flex d-md-none">
                  {" "}
                  <img src={copy} alt="" />
                </button>
               
              </div>
              <p className='about_modal_re'>You've received your referral link, and sharing it with your friends can earn you reward points. Thanks to your support!</p>
   
   
   
   
   
   
              <div className="d-flex d-md-none px-0 text-start flex-column flex-md-row gap-3 newed  ">
                <p className="mb-0 text-white ">Share referral link with your network:</p>
                <div>
                  <img src={twiter} alt="" />
                  <img src={fb} alt="" />
                </div>
              </div>
   
    <div className=" mdoal_ref_aa ">
      <div className="modal_social_links text-start">
      <div className="d-md-flex d-none px-0 text-start flex-column flex-md-row gap-3 newed  ">
                <p className="mb-0 text-white ">Share referral link with your network:</p>
                <div>
                  <img src={twiter} alt="" />
                  <img src={fb} alt="" />
                </div>
              </div>
      </div>
      <div className='d-md-flex  flex-column flex-md-row  rews gap-4 '>
      <button className='refferal_modal_btn mt-3 mt-md-0'>
              my referals
              </button>
              <button onClick={props.onHide} className='refferal_modal_btn mt-3 mt-md-0 close_mod d-block d-lg-none'>
             Close
              </button>
      </div>
             
    </div>
    
    
      </Modal.Body>
    
    </Modal>

    
    </div>
  )
}
