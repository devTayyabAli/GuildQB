import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import pml from "../Assets/ref_immg1.png";
import { AiOutlineClose } from "react-icons/ai";

import "./SelectRewards.css";

export default function SelectRewards(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="pura"
      >
        <AiOutlineClose
          className="close_btn d-none d-lg-block"
          onClick={props.onHide}
        ></AiOutlineClose>

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span className="text-white ps-3">Select Rewards </span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className=" gg gap-5">
            <div className="shift d-flex justify-content-center ">
              <img src={pml} alt="" className="modelimg" />

              <button className="clam">
                <span className="clamtext">Clam  </span>
              </button>
            </div>

            <div className="shift d-flex justify-content-center">
              <img src={pml} alt="" className="modelimg" />

              <button className="clam">
                <span className="clamtext">Clam   </span>
              </button>
            </div>

            <div className="shift d-flex justify-content-center">
              <img src={pml} alt="" className="modelimg" />

              <button className="clam">
                <span className="clamtext">Clam </span>
              </button>
            </div>
            <div className="shift d-flex justify-content-center">
              <img src={pml} alt="" className="modelimg" />

              <button className="clam">
                <span className="clamtext">Clam </span>
              </button>
            </div>
            <div className=" shift d-flex justify-content-center">
              <img src={pml} alt="" className="modelimg" />

              <button className="clam">
                <span className="clamtext">Clam </span>
              </button>
            </div>
            <div className="shift d-flex justify-content-center d-block d-lg-none">
              <img src={pml} alt="" className="modelimg" />

              <button className="clam">
                <span className="clamtext">Clam </span>
              </button>
            </div>
          </div>
        </Modal.Body>

        <Modal.Body className="d-none d-md-block">
          <div className=" ggg gap-5 ">
            <div className="shift d-flex justify-content-center ps-3">
              <img src={pml} alt="" className="modelimg" />

              <button className="clam">
                <span className="clamtext">Clam </span>
              </button>
            </div>

            <div className="shift d-flex justify-content-center">
              <img src={pml} alt="" className="modelimg" />

              <button className="clam">
                <span className="clamtext">Clam  </span>
              </button>
            </div>

            <div className="shift d-flex justify-content-center">
              <img src={pml} alt="" className="modelimg" />

              <button className="clam">
                <span className="clamtext">Clam 8</span>
              </button>
            </div>

            <div className="shift d-flex justify-content-center d-none d-lg-block    ">
              <img src={pml} alt="" className="modelimg" />

              <button className="clam justjust">
                <span className="clamtext">Clam  </span>
              </button>
            </div>
          </div>
        </Modal.Body>

        <div className="my-5  d-flex justify-content-center">
          <button className="b" onClick={props.onHide}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}
