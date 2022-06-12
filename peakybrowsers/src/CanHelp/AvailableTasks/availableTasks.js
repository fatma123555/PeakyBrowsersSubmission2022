import React from "react";
import "./availableTasks.css";
import { FiClock } from "react-icons/fi";
import { MdPriorityHigh } from "react-icons/md";
import { ImStarFull } from "react-icons/im";
import yulia from "./yulia.png";
import prof1 from "./prof1.png";
import prof2 from "./prof2.png";
import { useState } from "react";
import { Modal } from "./availableTaskModal";
export const AvailableTasks = () => {
  const [showModal, setShowModal] = useState(false);
  const [info, setInfo] = useState({
    img: yulia,
    name: "Yulia_3",
    stars: 4,
    title: "make a phonecall to a GP",
    due: "30/06/2022",
    priority: true,
  });
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const modalInfo = (i) => {
    setInfo(availableTaskList[i]);
    openModal();
  };
  const availableTaskList = [
    {
      img: yulia,
      name: "Yulia_3",
      stars: 4,
      title: "make a phonecall to a GP",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      due: "30/06/2022",
      priority: true,
    },
    {
      img: prof2,
      name: "andriy-95",
      stars: 5,
      title: "form translation",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "18/06/2022",
      priority: true,
    },
    {
      img: yulia,
      name: "Yulia_3",
      stars: 4,
      title: "proofread CV",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "31/07/2022",
      priority: false,
    },
    {
      img: yulia,
      name: "Yulia_3",
      stars: 4,
      title: "translate a letter from council",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "29/06/2022",
      priority: true,
    },
    {
      img: prof1,
      name: "ukraine-2022",
      stars: 3,
      title: "reply to an email",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "28/06/2022",
      priority: true,
    },
    {
      img: prof2,
      name: "andriy-95",
      stars: 5,
      title: "job application",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "30/06/2022",
      priority: false,
    },
    {
      img: prof1,
      name: "ukraine-2022",
      stars: 3,
      title: "VISA form",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "31/07/2022",
      priority: false,
    },
    {
      img: yulia,
      name: "Yulia_3",
      stars: 4,
      title: "Help buying a travelpass",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "25/06/2022",
      priority: false,
    },
    {
      img: yulia,
      name: "Yulia_3",
      stars: 4,
      title: "translate a letter from council",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "29/06/2022",
      priority: true,
    },
    {
      img: prof1,
      name: "ukraine-2022",
      stars: 3,
      title: "reply to an email",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "28/06/2022",
      priority: true,
    },
    {
      img: prof2,
      name: "andriy-95",
      stars: 5,
      title: "job application",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "30/06/2022",
      priority: false,
    },
    {
      img: prof1,
      name: "ukraine-2022",
      stars: 3,
      title: "VISA form",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "31/07/2022",
      priority: false,
    },
    {
      img: yulia,
      name: "Yulia_3",
      stars: 4,
      title: "Help buying a travelpass",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "25/06/2022",
      priority: false,
    },
  ];
  const availableTasks = [];
  for (let i = 0; i < availableTaskList.length; i++) {
    const stars = [];
    for (let j = 0; j < availableTaskList[i].stars; j++) {
      stars.push(<ImStarFull className="rating" />);
    }
    availableTasks.push(
      <div className="taskBox" onClick={() => modalInfo(i)}>
        <div className="userSection">
          <img src={availableTaskList[i].img} alt="user-profile"></img>
          <div className="nameSection">
            <div className="name">{availableTaskList[i].name}</div>
            <div>{stars}</div>
          </div>
        </div>
        <div className="title">{availableTaskList[i].title}</div>
        <div className="dueSection">
          <FiClock className="clockIcon" />
          <div className="due">{availableTaskList[i].due}</div>
        </div>
        {availableTaskList[i].priority ? (
          <MdPriorityHigh className="priority" color="red" />
        ) : null}
      </div>
    );
  }
  return (
    <div className="myAvailableTasks">
      {availableTasks}
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          closeModal={closeModal}
          name={info.name}
          title={info.title}
          rating={info.stars}
          img={info.img}
          due={info.due}
          priority={info.priority}
          description={info.description}
        />
      ) : null}
    </div>
  );
};