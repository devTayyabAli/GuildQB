import Accordion from "react-bootstrap/Accordion";
import "./ReferFQ.css";
import pick from "../Assets/angle.svg";
import { useTranslation } from "react-i18next";

function ReferFQ() {
  const { t } = useTranslation();
  return (
    <div className="maindiv bgFQ  ">
      <div className=" ">
        <div className="container">
          <h3 className="faqh2">Refer Q&A</h3>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <Accordion defaultActiveKey="0">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      {t("What is 'Refer a friend'?")}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      {t(
                        "This mechanism was created to reward our users and grow the GuildQB community. You can invite friends to use GuildQB together with you. Rewards will be offered to you as a thank-you present from us. More invites come with more rewards! We welcome you to help share the product with your network."
                      )}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-lg-8 col-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      {t(
                        "What will I get if I refer to my friends using GuildQB?"
                      )}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      {t(
                        "Please kindly see the 'EXCLUSIVE REWARDS' column for more details of the rewards in different scenarios. The rewards and the criteria may be updated throughout the development of GuildQB. Stay tuned."
                      )}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-lg-8 col-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      {t("How to join the 'Refer a friend' program？")}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      {t(
                        "If you wish to join the 'Refer a friend' program, you should connect your wallet to GuildQB's website. After that, you will be able to generate a unique link that you can send to your friends. After your friends complete the steps of downloading and joining GuildQB (What are the steps? See here.), you can see all the information, including the accounts and numbers you referred to, by visiting your personal 'Refer a Friend' control panel through clicking the 'Connect Wallet' on the 'Refer a friend' website page"
                      )}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-lg-8 col-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      {t("How do I get my rewards?")}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      {t(
                        "One successful invitation equals one point. You can see your points through your personal 'Refer a Friend' control panel through clicking the 'Connect Wallet' then 'Earn Rewards' on the 'Refer a friend' website page. You can easily cash in for your rewards by simply clicking the 'Reward' button. Different points come with different rewards. The rewards will be distributed within 14 days."
                      )}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-lg-8 col-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      {t("How many friends can I invite?")}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      {t(
                        "You can invite as many friends as you like. However, it has to be your friend's first use of GuildQB to reach the criteria to join the 'Refer a friend' program."
                      )}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-lg-8 col-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      {t("Can I change the wallet address of my referral?")}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      {t(
                        "The wallet you use to refer someone will be the only one that can claim the earnings from referrals. If you want to change the wallet, you have to accumulate your referrals from the start."
                      )}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-lg-8 col-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      {t("Can I delete my account?")}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      {t(
                        "You can delete your account. However, keep in mind that you won’t be able to create a new account with the ETH address you’ve used once your account is deleted. Also, you won’t be able to claim rewards that use the referral link connected with this account. If you wish to delete the account, please contact us via Discord."
                      )}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-lg-8 col-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      {t(
                        "Why aren't my referral points being counted by the system?"
                      )}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      {t(
                        "There are a few reasons why your referral points may not be counted:"
                      )}{" "}
                      <br />
                      {t(
                        "1. You may have violated the anti-fraud rules for referral points. These rules include: "
                      )}
                      <br />
                      {t(
                        "- Inviting users with the same IP address as yours. If you and the invited user are on the same network, your referral will not be eligible for points."
                      )}{" "}
                      <br />
                      {t(
                        "-Inviting multiple users, but they are all using the same device, then only one referral point will be awarded."
                      )}{" "}
                      <br />
                      {t(
                        "- Inviting more than 5 users from the same IP address. In this case, only one referral point will be awarded."
                      )}{" "}
                      <br />
                      {t(
                        "2. The system may take some time to update your referral points. It may take a while for the system to process your referral and update your account."
                      )}{" "}
                      <br />
                      {t(
                        "3. There could be a technical issue with the referral program or your account. If this is the case, please don't hesitate to reach out to us for assistance through Feedback or Discord. It's important to provide us with your wallet address when you contact us, so we can investigate and address any issues with the system."
                      )}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="row justify-content-center mt-3 pb-5">
            <div className="col-lg-8 col-12">
              <Accordion defaultActiveKey="1">
                <Accordion.Item className="item_bor" eventKey="0">
                  <Accordion.Header>
                    <span className="text-white faq_heading">
                      {t(
                        "Are there any qualification restrictions and rules for the program?"
                      )}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="text-white acc_text">
                      {t(
                        "Certainly! Here are the specific restrictions and rules:"
                      )}{" "}
                      <br />
                      1.{t(" Usage of Referral Links")} <br />
                      {t(
                        "Referral links are intended solely for personal and non-commercial purposes. It is prohibited to share referral links on commercial websites, such as bot services platforms, Wikipedia, etc. Engaging in 'spamming' activities to send unsolicited referral invitations is strictly forbidden. This includes mass emailing, texting, or messaging individuals who are not known to the user, and utilizing automated systems or bots across any platform for distributing referral links. Users are also not allowed to pay for advertising their referral links."
                      )}{" "}
                      <br />
                      2. {t("Referring Users")} <br />
                      {t(
                        "Individuals who choose to share the referral link must have a clean record of adhering to the referral rules. GuildQB reserves the right to disqualify any user from the program at its discretion, resulting in the removal of their referral link and points."
                      )}{" "}
                      <br />
                      3. {t("Referral")} <br />
                      {t(
                        "Link Recipients Friends who successfully sign up using a valid referral link will also receive credit. Each referred friend may only use a single referral link. KEKKAI holds the authority to suspend accounts or remove referral links, leading to the deduction of KEKKAI Points."
                      )}
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

export default ReferFQ;
