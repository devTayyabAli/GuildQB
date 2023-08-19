import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import pml from "../Assets/ref_immg1.png";
import { AiOutlineClose } from "react-icons/ai";

import "../SelectRewards/SelectRewards.css";
import axios from "axios";
import { useAccount } from "wagmi";

export default function Otp_model(props) {
  const [getinputvalue, setgetinputvalue] = useState("");
  const { address } = useAccount();
  const get_User_Data = async () => {
    try {

      let res = await axios.get(
        `https://betterlogic-audit.betterlogics.tech/auth/twitter/callback?oauth_verifier=${getinputvalue}&&address=${address}`
      );
      console.log("get_User_Data", res.data);
      if(res.data.success==true){
        props.setModalShoww(false)
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="pura"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <span className="text-white ps-3 text-center">
              Enter Access Code{" "}
            </span>
          </Modal.Title>
          <AiOutlineClose
            className="fs-3 text-white ml-auto d-none d-lg-block  "
            style={{ cursor: "pointer" }}
            onClick={props.onHide}
          ></AiOutlineClose>
        </Modal.Header>

        <Modal.Body>
          <div className=" ">
            <div className="d-flex ref_copy_main ">
              <input
                type="text"
                className="copy_inp p-3  text-white text-truncate "
                placeholder="Enter Access Token"
                name=""
                id=""
                //   value={refAddress}
                onChange={(e) => setgetinputvalue(e.target.value)}
              />
            </div>
          </div>
          <div className="my-4  d-flex justify-content-center">
            <button className="submitbtn" onClick={get_User_Data}>
              Submit
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
