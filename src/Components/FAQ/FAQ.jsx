import React from "react";
import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
  return (
    <div className="main_clr_faq">
      <div className="main_faq">
        <h1 className="main_faq_hedding">Q&A</h1>
        <div className="row justify-content-center mt-3">
          <div className="col-md-8">
            <Accordion defaultActiveKey="0">
              <Accordion.Item className="item_bor" eventKey="0">
                <Accordion.Header>
                  <span className="text-white faq_heading">
                    What is "Refer a friend"?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-white acc_text">
                    This mechanism was created to reward our users and grow the
                    GuildQB community. You can invite friends to use GuildQB
                    together with you. Rewards will be offered to you as a
                    thank-you present from us. More invites come with more
                    rewards! We welcome you to help share the product with your
                    network.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-8">
            <Accordion defaultActiveKey="1">
              <Accordion.Item className="item_bor" eventKey="0">
                <Accordion.Header>
                  <span className="text-white faq_heading">
                    What will I get if I refer to my friends using GuildQB?
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-white acc_text">
                    Please kindly see the "EXCLUSIVE REWARDS" column for more
                    details of the rewards in different scenarios. The rewards
                    and the criteria may be updated throughout the development
                    of GuildQB. Stay tuned.
                    {/* This mechanism was created to reward our users and grow the GuildQB community. You can invite friends to use GuildQB together with you. Rewards will be offered to you as a thank-you present from us. More invites come with more rewards! We welcome you to help share the product with your network.  */}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="makdn">
        <div className="bggg"></div>

        <div className="faq_bg">
          <div className="row mt-3 justify-content-center m-0">
            <div className="col-md-8">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      How to join the "Refer a friend" program？
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      If you wish to join the "Refer a friend" program, you
                      should connect your wallet to GuildQB's website. After
                      that, you will be able to generate a unique link that you
                      can send to your friends. <br />
                      After your friends complete the steps of downloading and
                      joining GuildQB (What are the steps? See here.), you can
                      see all the information, including the accounts and
                      numbers you referred to, by visiting your personal "Refer
                      a Friend" control panel through clicking the "Connect
                      Wallet" on the "Refer a friend" website page
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="row mt-3 justify-content-center m-0">
            <div className="col-md-8">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      How do I get my rewards？
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      One successful invitation equals one point. You can see
                      your points through your personal "Refer a Friend" control
                      panel through clicking the "Connect Wallet" then "Earn
                      Rewards" on the "Refer a friend" website page. You can
                      easily cash in for your rewards by simply clicking the
                      "Reward" button. Different points come with different
                      rewards. The rewards will be distributed within 14 days.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="faq_bgg">
          <div className="row mt-3 justify-content-center mx-0">
            <div className="col-md-8">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      How many friends can I invite?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      You can invite as many friends as you like. However, it
                      has to be your friend's first use of GuildQB to reach the
                      criteria to join the "Refer a friend" program.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="row mt-3 justify-content-center mx-0">
            <div className="col-md-8">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      Can I delete my account?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      You can delete your account. However, keep in mind that
                      you won’t be able to create a new account with the ETH
                      address you’ve used once your account is deleted. Also,
                      you won’t be able to claim rewards that use the referral
                      link connected with this account. If you wish to delete
                      the account, please contact us via Discord.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="row mt-3 justify-content-center mx-0">
            <div className="col-md-8">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      Why aren't my referral points being counted by the system?
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      There are a few reasons why your referral points may not
                      be counted: <br />
                      1. You may have violated the anti-fraud rules for referral
                      points. These rules include: <br />
                      - Inviting users with the same IP address as yours. If you
                      and the invited user are on the same network, your
                      referral will not be eligible for points. <br />
                      -Inviting multiple users, but they are all using the same
                      device, then only one referral point will be awarded.{" "}
                      <br />
                      - Inviting more than 5 users from the same IP address. In
                      this case, only one referral point will be awarded. <br />
                      2. The system may take some time to update your referral
                      points. It may take a while for the system to process your
                      referral and update your account. <br />
                      3. There could be a technical issue with the referral
                      program or your account. If this is the case, please don't
                      hesitate to reach out to us for assistance through
                      Feedback or Discord. It's important to provide us with
                      your wallet address when you contact us, so we can
                      investigate and address any issues with the system.
                      {/* You can delete your account. However, keep in mind that you won’t be able to create a new account with the ETH address you’ve used once your account is deleted. Also, you won’t be able to claim rewards that use the referral link connected with this account. If you wish to delete the account, please contact us via Discord. */}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
