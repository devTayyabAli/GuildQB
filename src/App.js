import "./App.css";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import How_it_work from "./Components/How_it_work/How_it_work";
import How_it_work_two from "./Components/How_it_work_two/How_it_work_two";
import ReferFQ from "./Components/ReferFQ/ReferFQ";
import Reffereal_main from "./Components/Reffereal_main/Reffereal_main";
import Reward_sec from "./Components/Reward_sec/Reward_sec";
import Reward_slider from "./Components/Reward_slider/Reward_slider";
import Tablle from "./Components/Tablle/Tablle";
import Already_ref from "./Components/Already_ref/Already_ref";
// import MyVerticallyCenteredModal from './Components/MyVerticallyCenteredModal/MyVerticallyCenteredModal';
import SelectRewards from "./Components/SelectRewards/SelectRewards";
import { useEffect, useState } from "react";
import Header_two from "./Components/Header_two/Header_two";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import i18next from "i18next";
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from "wagmi";
import axios from "axios";
import Twitter_Auth from "./Components/Twitter_Auth";


function App() {
  const { address } = useAccount();
  const [collection, setcollection] = useState();
  const [user_Points, setUser_Points] = useState(0)

  const [langValue, setlangValue] = useState('')
  const handleChange = (value) => {

    setlangValue(value)
    i18next.changeLanguage(value);
    // console.log("changeLanguage", value);
  };


  const handleButtonClick = (newData) => {
    setcollection(newData);
  };

  const User_Points=async()=>{
    try {
      let res=await axios.get(`https://betterlogic-audit.betterlogics.tech/get_Ponits?UserAddress=${address}`)
    
      setUser_Points(res.data.data[0].Point)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    let intveral = setInterval(() => {
      User_Points()
     
    }, 1000);

    return () => clearInterval(intveral);
  },[])

  return (
    <div className="App">
      <Header user_Points={user_Points} handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<Home langValue={langValue} collection={collection}/>} />
        <Route path="/Refferal_main" element={<Reffereal_main user_Points={user_Points} />} />
       
  

       </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
