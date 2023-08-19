import React, { useEffect, useState } from "react";
import "./Reffereal_main.css";
import copy from "../Assets/copy_icon.svg";
import twiter from "../Assets/soic_twi.svg";
import fb from "../Assets/fb.svg";
import award from "../Assets/award.svg";
import Refferal_modal from "../Refferal_modal/Refferal_modal";
import SelectRewards from "../SelectRewards/SelectRewards";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import { FacebookButton, FacebookCount, TwitterButton } from "react-social";
import { useTranslation } from "react-i18next";

export default function Reffereal_main({ user_Points }) {
  const { t } = useTranslation();

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShoww, setModalShoww] = React.useState(false);
  const [refAddress, setRefAddress] = useState("");
  const [copied, setCopied] = useState(false);
  const [Refferal_Data, setRefferal_Data] = useState([]);
  const { address } = useAccount();


  let history = window.location;

  const Get_Refferal = async () => {
    try {
      let res = await axios.get(
        `https://betterlogic-audit.betterlogics.tech/get_All_Refferal?Refferal_Address=${address}`
      );
      console.log("res", res.data.data);
      setRefferal_Data(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (address) {
      Get_Refferal();
      setRefAddress(`${history.origin}/?ref=${address}`);
    } else {
      setRefAddress("Connect Wallet");
    }

    setInterval(() => {
      setCopied(false);
    }, 3000);
  }, [address, copied]);

  return (
    <div className="Refferal_main_page " id="Refferal">
      <div className="container-fluid fourth_k ">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link className="text-decoration-none" to="/">
                {" "}
                <a className="quest_ref text-decoration-none    " href="#">
                  Home
                </a>
              </Link>
            </li>
            <li class="breadcrumb-item  " aria-current="page">
              <a className="quest_ref text-decoration-none ref_ref  " href="#">
                Referral
              </a>
            </li>
          </ol>
        </nav>
        {/* main refferal part  */}
        <div className="row">
          <div className="col-lg-5  px-0">
            <div className="ref_left_content text-start">
              <h1>Referral</h1>
              <p>Refer a friend and get rewards.</p>
              <div className="cir_clr"></div>
            </div>
          </div>
          <div className="col-lg-7 px-0">
            <div className="ref_right_cont text-start">
              {/* <div className="fsfsww2"></div> */}
              <p>Your referral link</p>
              <div className="d-flex ref_copy_main">
                <input
                  type="text"
                  className="copy_inp text-white text-truncate "
                  placeholder="https://guildqb.com/invitation/46504932bcc5526955"
                  name=""
                  id=""
                  value={refAddress}
                  // onClick={() => setModalShow(false)}
                />
                <CopyToClipboard
                  text={refAddress}
                  onCopy={() => setCopied(true)}
                >
                  <button className="ref_copy d-md-flex">
                    <img src={copy} alt="" />
                    <p className="copy_text">{copied ? "COPIED" : "COPY"}</p>
                  </button>
                  {/* <button className="ref_copy  d-flex d-md-none">
                  {" "}
                  <img src={copy} alt="" />
                </button> */}
                </CopyToClipboard>

                <Refferal_modal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <SelectRewards
                  showw={modalShoww}
                  onHide={() => setModalShoww(false)}
                />
              </div>
              <p className="para_ref">
                {t("You've received your referral link, and sharing it with your friends can earn you reward points. Thanks to your support!")}
                
              </p>
              <div className="d-flex px-0 text-start flex-column flex-md-row gap-3 newed  mt-3">
                <p className="mb-0 ">Share referral link with your network:</p>
                <div>
                <TwitterButton url={`I have found a great WEB3 game guild - @GuildQB!  Check it Out at my referral link: ${refAddress}`}
                  appId="hoR0RdUg7zLKb5xlSBp85vn3i" style={{background:"transparent",border:"none"}}>
                    {/* <FacebookCount url={url} /> */}
                    <img src={twiter} alt="" />
                  </TwitterButton>
                    
               
                  {/* <FacebookButton url="Tayyab" appId="196427536765451" style={{background:"transparent",border:"none"}}>
                   
                    <img src={fb} alt="" />
                  </FacebookButton> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 boxes of total reward and select reaward  */}
        <div className="row adjust_ment mt-4 mt-lg-0">
          <div className="col-md-4 col-6 ps-0">
            <div className="refer_content text-start">
              <p>Total referral numbers</p>
              <h1>{Refferal_Data.length}</h1>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="refer_content text-start">
              <p>Left Points</p>
              <h1>{user_Points}</h1>
            </div>
          </div>
          <div
            onClick={() => setModalShoww(true)}
            className="col-md-4 px-0 px-md-1 col-12 mt-3 mt-md-0"
          >
            <div className="color_ref text-center">
              {/* <p >Left Points</p> */}
              <img src={award} alt="" />
              <p>Select Reward</p>
            </div>
          </div>
        </div>
        <SelectRewards show={modalShoww} onHide={() => setModalShoww(false)} />

        {/* last table with white header  */}

        <div className="row table_tay ">
          <div className="col-md-6 px-0">
            <div className="last_left">
              <div className="colsejf rewd_color">
                <p className="referds">Accounts You’ve Referred</p>
              </div>
              <div className="loer rewd_colorr">
                {Refferal_Data.length == 0 ? (
                  <>
                    <p className="rewddd_p">
                      No successful referrals yet. Refer GuildQB to your friends
                      now.
                    </p>
                  </>
                ) : (
                  <>
                    <ul style={{ listStyle: "none" }}>
                      {Refferal_Data.map((items, index) => {
                        return (
                          <>
                          <li className="rewddd_p li_desk mt-2">
                              {index + 1}: {items.UserAddress}
                            </li>
                            <li className="rewddd_p li_mob mt-2">
                              {index + 1}: {`${items.UserAddress.substring(0, 10)}...${items.UserAddress.substring(
                          items.UserAddress.length - 10
                        )}`}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6 px-0">
            <div className="last_left">
              <div className="fsfsww3"></div>

              <div className="colsejff rewd_color">
                <p className="referds">Rewards you’ve received</p>
              </div>
              <div className="loerr rewd_colorr text-start">
                {Refferal_Data.length == 0 ? (
                  <>
                    <p className="rewddd_p">
                      No rewards claim yet. Refer GuildQB to your friends and
                      get rewards.
                    </p>
                  </>
                ) : (
                  <>
                    <ul style={{ listStyle: "none" }}>
                      {Refferal_Data.map((items, index) => {
                        return (
                          <>
                            <li className="rewddd_p mt-2">1</li>
                          </>
                        );
                      })}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
