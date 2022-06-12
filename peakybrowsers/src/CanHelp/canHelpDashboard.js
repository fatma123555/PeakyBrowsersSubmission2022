import React from "react";
import "./canHelp.css";
import { MyTasks } from "./myTasks";
import { ImStarFull } from "react-icons/im";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState, useEffect } from "react";
import avatar from "./avatar.png";
import ukranianFlag from "./Ukr_flag.png";
import BritishFlag from "./BritishFlag.png";
import { AvailableTasks } from "./AvailableTasks/availableTasks.js";
import box from './box.svg'


export const CanHelp = () => {
  const tips = [
    {
      Eng: "Hit the Report icon to report a task that looks strange.",
      Ukr: "Натисніть Поскаржитися, щоб повідомити про завдання, яке виглядає дивним.",
    },
    {
      Eng: "Always meet in a public place, and try to bring a friend for extra safety.",
      Ukr: "Завжди зустрічайтеся в громадському місці і намагайтеся прийти з другом для додаткової безпеки.",
    },
    {
      Eng: "Leave a review of your Helper/Helpee to help future users.",
      Ukr: "Залиште відгук про свого помічника/помічника, щоб допомогти майбутнім користувачам.",
    },
    {
      Eng: "Message through the AcliMATE platform. Don't give out your phone number!",
      Ukr: "Спілкуйтеся через платформу AccliMATE. Не вказуйте свій номер телефону!",
    },
  ];

  const [tipEng, setTipEng] = useState("");
  const [tipUkr, setTipUkr] = useState("");

  const getRandomTip = () => {
    let num = Math.floor(Math.random() * tips.length);
    setTipEng(tips[num].Eng);
    setTipUkr(tips[num].Ukr);
  };
  useEffect(() => {
    getRandomTip();
  });

  return (
    <div className="helperDashboard">
      <div className="dashboardTitle">
       <h1> Hello {JSON.parse(localStorage.getItem("name"))}, welcome back! </h1>
      </div>
      <div className="wrapper">
        <div className="currenttasks">
          <div className="current tasks">
            <MyTasks />
          </div>
        </div>
        <div className="profile">
          <h2>Profile | профіль</h2>
          <div className="profileContainer">
            <div className="section1">
              <img src={avatar} alt="avatar" id="avatar" />
            </div>
            <div className="section2">
              <p className="username"> Maria_Uk </p>
              <p className="rating">
                {" "}
                <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull />{" "}
                <ImStarFull />
              </p>
            </div>
            <div className="section3">
              <ul>
                <li className="tags">
                  <img id="UkrFlag" src={ukranianFlag} alt="ukranianFlag" />
                  <p>Fluent</p>
                </li>
                <li className="tags">
                  <img id="BritishFlag" src={BritishFlag} alt="britishFlag" />
                  <p>Fluent</p>
                </li>
              </ul>
            </div>
            <div className="section4">
              <HiOutlineLocationMarker id="location" /> Birmingham
            </div>
          </div>
        </div>
        <div className="tips">
          <h2>Tips | поради</h2>
          <div className="tipSection">
            <img className="box" src={box} alt="box"/>
            <div className="tipText">
              <p>{tipEng}</p>
              <p>{tipUkr}</p>
            </div>
          </div>
        </div>
        <div className="availableTasks">
          <h2>Tasks Available | Доступні завдання</h2>
          <AvailableTasks />
        </div>
      </div>
    </div>
  );
};
