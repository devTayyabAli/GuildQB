import React, { useEffect, useState } from "react";
import Header_two from "../Header_two/Header_two";
import Header from "../Header/Header";
import Reward_sec from "../Reward_sec/Reward_sec";
import Tablle from "../Tablle/Tablle";
import How_it_work_two from "../How_it_work_two/How_it_work_two";
import How_it_work from "../How_it_work/How_it_work";
import Already_ref from "../Already_ref/Already_ref";
import ReferFQ from "../ReferFQ/ReferFQ";
import Footer from "../Footer/Footer";
import { useAccount } from "wagmi";
import axios from "axios";

const Home = ({ collection, langValue }) => {
  const { address } = useAccount();
  const [isFollow, setIsFollow] = useState([]);

  const User_Info = async () => {
    try {
      let UserID = null;
      if (window.location.href.includes("ref")) {
        UserID = window.location.href.split("=");
        UserID = UserID[UserID.length - 1];
      }

      if (address) {
        let Add_Address = await axios.post(
          "https://betterlogic-audit.betterlogics.tech/Add_Address",
          {
            UserAddress: address,
            Refferal_Address: UserID,
          }
        );
        // console.log("resresresres", Add_Address);
        if (window.location.href.includes("ref")) {
          let res = await axios.post(
            "https://betterlogic-audit.betterlogics.tech/get_Follower",
            {
              User_Address: UserID,
            }
          );

          setTimeout(() => {
            if (address) {
              Check_Follow();
            }
          }, 3000);

          const response = await axios.get(
            `https://betterlogic-audit.betterlogics.tech/get_User?UserAddress=${address}`
          );

          if (response.data.data[0].reward == false) {
            if (res.data.success == true) {
              let Update_Point = await axios.post(
                "https://betterlogic-audit.betterlogics.tech/Update_Point",
                {
                  UserAddress: UserID,
                }
              );

              if (Update_Point.data.success == true) {
                let response = await axios.get(
                  `https://betterlogic-audit.betterlogics.tech/Update_reward?UserAddress=${address}`
                );
              }
            }
          }

          let get_Follower = await axios.post(
            "https://betterlogic-audit.betterlogics.tech/get_Follower",
            {
              User_Address: address,
            }
          );

          if (response.data.data[0].bonus_point == false) {
            if (get_Follower.data.success == true) {
              let Update_Point = await axios.post(
                "https://betterlogic-audit.betterlogics.tech/Update_Point",
                {
                  UserAddress: address,
                }
              );

              if (Update_Point.data.success == true) {
                let response = await axios.get(
                  `https://betterlogic-audit.betterlogics.tech/Update_bonus_point?UserAddress=${address}`
                );
              }
            }
          }
        } else {
          let USer_get = await axios.post(
            "https://betterlogic-audit.betterlogics.tech/get_Follower",
            {
              User_Address: address,
            }
          );
          setTimeout(() => {
            if (address) {
              Check_Follow();
            }
          }, 3000);
          console.log("USer_get",USer_get);
          const response = await axios.get(
            `https://betterlogic-audit.betterlogics.tech/get_User?UserAddress=${address}`
          );
          if (response.data.data[0].bonus_point === false) {
            if (USer_get.data.success === true) {
              let Update_Point = await axios.post(
                "https://betterlogic-audit.betterlogics.tech/Update_Point",
                {
                  UserAddress: address,
                }
              );

              if (Update_Point.data.success == true) {
                let response = await axios.get(
                  `https://betterlogic-audit.betterlogics.tech/Update_bonus_point?UserAddress=${address}`
                );
              }
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    User_Info();
  }, [address]);

  const Add_Follower = async (id) => {
    try {
      let res = await axios.post(
        "https://betterlogic-audit.betterlogics.tech/Add_Follower",
        {
          User_Address: address,
          twitter_Follow: id == "twitter" ? true : false,
          discord_Follow: id == "discord" ? true : false,
          Post_Follow: id == "post" ? true : false,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const Check_Follow = async () => {
    try {
      let res = await axios.post(
        "https://betterlogic-audit.betterlogics.tech/get_Follower_All",
        {
          User_Address: address,
        }
      );
      // console.log("Check_Follow",res.data);

      if (res.data.success == true) {
        setIsFollow(res?.data?.data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let intveral = setInterval(() => {
      if (address) {
        Check_Follow();
      }
    }, 1000);
    return () => clearInterval(intveral);
  });

  return (
    <div>
      <Reward_sec langValue={langValue} collection={collection} />
      <Tablle />

      <How_it_work_two Add_Follower={Add_Follower} isFollow={isFollow} />

      <Already_ref />
      <ReferFQ />
    </div>
  );
};

export default Home;
