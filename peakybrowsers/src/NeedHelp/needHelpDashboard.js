import "./needHelp.css";
import avatar from "./avatar.png";
import ukranianFlag from "./Ukr_flag.png";
import BritishFlag from "./BritishFlag.png";
import React, { useState, useEffect } from "react";
import { Modal } from "./newTaskModal";
// import { RiShieldStarFill } from "react-icons/ri";
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import { BsPatchCheckFill } from "react-icons/bs";
import { MdAddTask } from "react-icons/md";
import { MyTasks } from "./myTasks";
import safety from "./safety.svg"

export const NeedHelp = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
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
      Eng: "Message through the AcliMATE platform. Don't give out your phone number!",
      Ukr: "Спілкуйтеся через платформу AccliMATE. Не вказуйте свій номер телефону!",
    },
    {
      Eng: "Leave a review of your Helper/Helpee to help future users.",
      Ukr: "Залиште відгук про помічника/підопічного, щоб допомогти майбутнім користувачам.",
    },
    {
      Eng: "Always check your mate's rating before agreeing to meet in person.",
      Ukr: "Завжди перевіряйте рейтинг користувача перш ніж зустрічатися особисто.",
    },
    {
      Eng: "Report offensive comments and inappropriate behaviour.",
      Ukr: "Скаржтеся на образливі коментарі та неприйнятну поведінку.",
    },
  ];
  const [tipEng1, setTipEng1] = useState("");
  const [tipUkr1, setTipUkr1] = useState("");
  const [tipEng2, setTipEng2] = useState("");
  const [tipUkr2, setTipUkr2] = useState("");

  const getRandomTip = () => {
    let num1 = Math.floor(Math.random() * tips.length);
    let num2;
    do {
      num2= Math.floor(Math.random() * tips.length);
    } while( num1 ===num2)
    setTipEng1(tips[num1].Eng);
    setTipUkr1(tips[num1].Ukr);
    setTipEng2(tips[num2].Eng);
    setTipUkr2(tips[num2].Ukr);
  };
  useEffect(() => {
    getRandomTip();
  },[]);


  return (
    <div className="Dashboard">
      <h1 className="helloname">
        Hello {JSON.parse(localStorage.getItem("name"))}, welcome back!
      </h1>

      <div class="wrapper">
        <div class="box2">
          <h2>Tips | поради</h2>
          <div className="tipSection">
            <div className="tipText">
              <p>{tipEng1}</p>
              <p>{tipUkr1}</p>
              <img className="safetyicon" src={safety} alt="safetyicon" />
              <p>{tipEng2}</p>
              <p>{tipUkr2}</p>
            </div>
          </div>
        </div>

        <div class="box3">
          <h2>Profile | профіль</h2>
          <div className="profileContainer">
            <div className="section1">
              <img src={avatar} alt="avatar" id="avatar" />
            </div>
            <div className="section2">
              <p className="username"> Yulia_3 </p>
              <p className="rating">
                {" "}
                <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull />{" "}
                <ImStarEmpty />
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
                  <p>Beginner</p>
                </li>
              </ul>
            </div>
            <div className="section4">
              <HiOutlineLocationMarker id="location" /> Birmingham
            </div>
          </div>
        </div>

        <div class="box4">
          <h2>My Tasks | мої завдання</h2>
          <div class="box1">
            <MdAddTask id="newTaskImg" onClick={openModal}></MdAddTask>
            
            {showModal ? (
              <Modal setShowModal={setShowModal} closeModal={closeModal} />
            ) : null}
          </div>
          <MyTasks />
        </div>
      </div>
    </div>
  );
};