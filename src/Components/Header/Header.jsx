import React, { useEffect, useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { FaWallet } from "react-icons/fa";
import qb_logo from "../Assets/Logo.png";
import qb_mobl_logo from "../Assets/mobile_logo.png";

import pt_logo from "../Assets/pt_logomain.png";
import twi_logo from "../Assets/twi.png";
import discord_logo from "../Assets/discord.png";
import skill_icons_twitter from '../Assets/skill-icons_twitter.svg'
import skill_icons_discord from '../Assets/skill-icons_discord 1.svg'

import { Select, Space } from "antd";
import { Link } from "react-router-dom";
import { useWeb3Modal } from "@web3modal/react";
import { useBalance, useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import axios from "axios";
import i18next from "i18next";

function Header({ handleButtonClick,handleChange,user_Points }, props) {

  const [langValue, setlangValue] = useState('');


  const { open, close } = useWeb3Modal();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const [isFollow, setIsFollow] = useState([]);
 

  const Check_Follow = async () => {
    try {
      let res = await axios.post(
        "https://betterlogic-audit.betterlogics.tech/get_Follower_All",
        {
          User_Address: address,
        }
      );
      // console.log("Check_Follow",res.data);
      if(res.data.success==true){

        setIsFollow(res?.data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let intveral = setInterval(() => {
      Check_Follow();
    }, 1000);

    return () => clearInterval(intveral);
  });
  return (
    <div className="">
      <>
        <Navbar collapseOnSelect expand="lg" className="NavUpperMain">
          <Container className="nav_ka_contai">
            <Navbar.Brand className="text-white" href="#home">
              <Link to="/">
                <div>
                  <img src={qb_logo} alt="#" className="qbmain" />
                  <img src={qb_mobl_logo} alt="#" className="qbMobil" />
                </div>
              </Link>
            </Navbar.Brand>
            <div className="d-flex gap-3">
              <Nav.Link
                className="walletConnect2"
                href="#"
                onClick={() => open()}
              >
                {address ? (
                  <><FaWallet className="wallet" /> 
                  {`${address.substring(0, 6)}...${address.substring(
                          address.length - 4
                        )}`}
                  </>
                ) : (
                  <>
                  <FaWallet className="wallet" />
                Connect
                  </>
                )}
                
              </Nav.Link>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                className="humberger"
              />
            </div>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ms-auto firstNavLink">
                {/* <Nav.Link className="MainLink" href="#">
                  Metaverse
                </Nav.Link>
                <Nav.Link className="MainLink" href="#">
                  Token
                </Nav.Link> */}
                <Nav.Link className="MainLink" href="#">
                  Quest
                </Nav.Link>
                {/* <Nav.Link className="MainLink" href="#">
                  OharaiNFT
                </Nav.Link>
                <Nav.Link className="MainLink" href="#">
                  Scholarship
                </Nav.Link> */}
                <Nav.Link className="MainLink" href="#">
                  Dock
                </Nav.Link>
              </Nav>

              <Nav className="d-flex align-items-center">
                <Nav.Link href="" className="sltUpper">
                  <Space wrap className="kop">
                    <Select
                      className=""
                      defaultValue="English"
                      onChange={handleChange}
                      options={[
                        {
                          value: "en",
                          label: "English",
                        },
                        {
                          value: "jp",
                          label: "Japanese",
                        },
                      ]}
                    />
                  </Space>
                  {/* <Form.Select href="#" aria-label="Default select example" onChange={(e)=> handleClick(e)} className="selt_main">
                    <option href="#" className="optionsLnk" value={'en'}>English</option>
                    <option href="#" className="optionsLnk" value={'jp'}>Japanese</option>
                  </Form.Select> */}
                </Nav.Link>
                {chain?.id == chains[0]?.id ? (
                  address ? (
                    <>
                      {/* {`${address.substring(0, 6)}...${address.substring(
                          address.length - 4
                        )}`}{" "} */}
                      <Nav.Link className="ptbX mg" href="">
                        <img src={pt_logo} alt="#" className="ptimgg" />{user_Points} pt
                      </Nav.Link>

                      <Nav.Link className="ms-2 mg" href="">
                        <div className="d-flex align-items-center gap-3">
                          {
                             isFollow && isFollow?.discord_Follow==true ?    <img src={discord_logo} alt="" className="twi" />:   <img src={skill_icons_discord} alt="" className="twi" />
                              
                          }
                          {
                             isFollow && isFollow?.twitter_Follow==true ?      <img src={twi_logo} alt="" className="twi" />:   <img src={skill_icons_twitter} alt="" className="twi" /> 

                          }
                          {/* <img src={discord_logo} alt="" className="twi" />
                          <img src={twi_logo} alt="" className="twi" /> */}
                        </div>
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                     <Nav.Link
                      className="walletConnect"
                      href="#"
                      onClick={() =>
                        chain?.id == chains[0]?.id
                          ? open()
                          : switchNetwork?.(chains[0]?.id)
                      }
                      // className={collection == 0 ? "active" : "non_active"}
                    >
                      <FaWallet className="wallet" />
                      Connect Wallet
                    </Nav.Link>
                    </>
                  )
                ) : (
                  <>
                    <Nav.Link
                      className="walletConnect"
                      href="#"
                      onClick={() =>
                        (
                          !address ? open() :
                          chain?.id == chains[0]?.id
                            ? open()
                            : switchNetwork?.(chains[0]?.id)
                        )
                      }
                      // className={collection == 0 ? "active" : "non_active"}
                    >
                      <FaWallet className="wallet" />
                      {
                        !address ?  "Connect wallet" : <>
                         {chain?.id == chains[0]?.id ? (
                        address ? (
                          <>
                            {`${address.substring(0, 6)}...${address.substring(
                              address.length - 4
                            )}`}{" "}
                          </>
                        ) : (
                          "Connect wallet"
                        )
                      ) : (
                        "Switch NetWork"
                      )}
                        </>
                      }
                     
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>

      {/* -------------Navebar 2------------- */}
    </div>
  );
}

export default Header;
