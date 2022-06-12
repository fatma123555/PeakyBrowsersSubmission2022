import "./myTasks.css";
import { FiClock, FiCheckCircle, FiCircle } from "react-icons/fi";
import { MdPriorityHigh, MdDelete } from "react-icons/md";
import { RiInformationLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TaskInfoModal } from "./TaskInfoModal";

export const MyTasks = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTasks, setCurrentTasks] = useState([
    {
      title: "make a phonecall to a GP",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "30/06/2022",
      priority: true,
      location: "Birmingham",
    },
    {
      title: "proofread CV",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "30/06/2022",
      priority: false,
      location: "Remote",
    },
    {
      title: "translate a letter from council",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "29/06/2022",
      priority: true,
      location: "Remote",
    },
    {
      title: "reply to an email",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: true,
      due: "05/06/2022",
      priority: true,
      location: "Remote",
    },
    {
      title: "Help buying a travelpass",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
      complete: false,
      due: "25/06/2022",
      priority: false,
      location: "Remote",
    },
  ]);
  const [info, setInfo] = useState({
    title: "make a phonecall to a GP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut egestas metus, ultricies finibus leo. Nam mollis lectus orci. Aenean dapibus odio ligula, vitae suscipit neque sollicitudin nec. Donec ac erat ultricies justo lacinia molestie vitae nec leo. Sed lacinia ante leo, at euismod velit ornare a. Aliquam a hendrerit lorem.",
    complete: false,
    due: "30/06/2022",
    priority: true,
    location: "Birmingham",
  });

  const modalInfo = (index) => {
    setInfo(currentTasks[index]);
    openModal();
  };
  const openModal = () => {
    setShowModal(true);
  };
  const deleteItem = (index) => {
    const updateList = [...currentTasks];
    updateList.splice(index, 1);
    setCurrentTasks(updateList);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let newTasks = JSON.parse(localStorage.getItem("newTasks"));
    if (newTasks) {
      setCurrentTasks((prev) => [...prev,newTasks[0]])
      window.localStorage.removeItem('newTasks');
    }
  });

  const tasks = [];
  for (let i = 0; i < currentTasks.length; i++) {
    tasks.push(
      <div className="taskBox">
        <div className="taskInfo">
          {currentTasks[i].complete ? (
            <FiCheckCircle className="complete" color="limegreen" />
          ) : (
            <FiCircle className="complete" color="rgb(87, 144, 235)" />
          )}
          <div className="title">{currentTasks[i].title}</div>
          <div className="dueSection">
            <FiClock className="clockIcon" />
            <div className="due">{currentTasks[i].due}</div>
          </div>
          {currentTasks[i].priority && !currentTasks[i].complete ? (
            <MdPriorityHigh className="priority" color="red" />
          ) : null}
        </div>
        <div className="icons">
          <RiInformationLine onClick={() => modalInfo(i)} className="icon" />
          <FaEdit className="icon" />
          <MdDelete className="icon" onClick={() => deleteItem(i)} />
        </div>
      </div>
    );
  }

  return (
    <div className="myTasks">
      <div>{tasks}</div>
      {showModal ? (
        <TaskInfoModal
          showModal={showModal}
          closeModal={closeModal}
          title={info.title}
          description={info.description}
          complete={info.complete}
          due={info.due}
          location={info.location}
          priority={info.priority}
        />
      ) : null}
    </div>
  );
};
