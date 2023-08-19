import React from "react";
import "./How_it_work.css";
import icon from "../Assets/wallet_icon.svg";
import discord from "../Assets/discord.svg";
import twi from "../Assets/twitter.svg";
import { useTranslation } from "react-i18next";
import { useBalance, useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";

export default function How_it_work() {
  const { t } = useTranslation();

  const { open, close } = useWeb3Modal();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();

  return (
    <div className="main_how_work">
      <h1 className="work_content_h1">How it works?</h1>
      <div className="work_content">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="main_content_box ">
                <h1 className="mb_mb">01</h1>
                <div className="left_bor_content">
                  <h4>{t("Connect your wallet")}</h4>
                  <p>
                    {t(
                      "Go to the Refer a Friend page and connect your wallet."
                    )}
                  </p>
                  {chain?.id == chains[0]?.id ? (
                    address ? (
                      <>
                        {/* <div className="earn_btn">
                    <button className="reward_but">
                      <img src={badge} className="walletReward me-2" />
                      earn rewards
                    </button>
                  </div> */}
                      </>
                    ) : (
                      <>
                        <button
                          className="connect_wallet_hw"
                          onClick={() =>
                            chain?.id == chains[0]?.id
                              ? open()
                              : switchNetwork?.(chains[0]?.id)
                          }
                        >
                          {" "}
                          <img src={icon} alt="" /> connect wallet
                        </button>
                      </>
                    )
                  ) : (
                    <>
                      <div className="d-flex justify-content-center">
                        <button
                          className="reward_but"
                          onClick={() =>
                            chain?.id == chains[0]?.id
                              ? open()
                              : switchNetwork?.(chains[0]?.id)
                          }
                        >
                          {/* <FaWallet className="walletReward me-2" /> */}
                          {chain?.id == chains[0]?.id ? (
                            address ? (
                              <>
                                {`${address.substring(
                                  0,
                                  6
                                )}...${address.substring(
                                  address.length - 4
                                )}`}{" "}
                              </>
                            ) : (
                              <>
                                <div className="d-flex justify-content-center">
                                  <button className="reward_but">
                                    {/* <FaWallet className="walletReward me-2" /> */}
                                    Connect wallet
                                  </button>
                                </div>
                              </>
                            )
                          ) : (
                            "Switch NetWork"
                          )}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <div className="main_content_box ">
                <h1>02</h1>
                <div className="left_bor_content">
                  <h5>
                    ① {t("Follow")}{" "}
                    <a
                      className="text-decoration-underline text-white"
                      href="https://twitter.com/GuildQB"
                      target="_blank"
                    >
                      {" "}
                      {t("GuildQB's official")} {t("Twitter")}{" "}
                    </a>
                  </h5>
                  <h5>
                    {t("② Retweet the ")}
                    <a
                      className="text-decoration-underline text-white"
                      href="https://twitter.com/guildqb/status/1680093793956270080?s=46&t=uvRkGhFIpkzzPVj8jAkdig"
                      target="_blank"
                    >
                      {t("designated post")}
                    </a>
                  </h5>
                  <h5>
                    ③ {t("Follow the ")}
                    <a
                      className="text-decoration-underline text-white"
                      href="https://discord.com/invite/BNjFBTgpMt"
                      target="_blank"
                    >
                      {" "}
                      {t("official GuildQB Discord")}{" "}
                    </a>
                  </h5>
                  <div className="two_btn flex-column flex-md-row d-flex gap-4">
                    <a
                      href="https://discord.com/invite/BNjFBTgpMt"
                      target="_blank"
                      className="text-decoration-none text-white"
                    >
                      <button className="dis_btn">
                        {" "}
                        <img src={discord} alt="" />{" "}
                        <small className="ps-1">Connect </small>
                      </button>
                    </a>
                    <a
                      href="https://twitter.com/GuildQB"
                      target="_blank"
                      className="text-decoration-none text-white"
                    >
                      <button className="dis_btn">
                        {" "}
                        <img src={twi} alt="" />{" "}
                        <small className="ps-1">Connect </small>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="main_content_box ">
                <h1>03</h1>
                <div className="left_bor_content">
                  <h4>{t("Share your referral link with friends")}</h4>
                  <p>
                    {t(
                      "Invite your friends by sharing your personal referral link."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <div className="main_content_box ">
                <h1>04</h1>
                <div className="left_bor_content">
                  <h4>{t("Invite friends to use GuildQB")}</h4>
                  <p>
                    {t(
                      "Ask your friends using the link you shared. Once they complete the follow steps, you will both be rewarded with GuildQB points."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <div className="main_content_box ">
                <h1>05</h1>
                <div className="left_bor_content">
                  <h4>{t("Get rewarded")}</h4>
                  <p>
                    {t(
                      "Enjoy a reward for you and each of the friends you refer. You can continue to earn points by referring your friends and accumulate your points to get better rewards!"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
