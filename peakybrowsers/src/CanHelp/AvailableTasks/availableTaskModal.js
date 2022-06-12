import "./availableTaskModal.css";
import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { ImStarFull, ImStarEmpty } from "react-icons/im";
import { FiClock } from "react-icons/fi";
import { MdPriorityHigh, MdEmail, MdReport } from "react-icons/md";

export function Modal({
  setShowModal,
  closeModal,
  img,
  name,
  rating,
  title,
  due,
  priority,
  description,
}) {
  const stars = [];
  for (let j = 0; j < rating; j++) {
    stars.push(<ImStarFull className="rating" />);
  }
  for (let j = 0; j < 5 - rating; j++) {
    stars.push(<ImStarEmpty className="rating" />);
  }

  return (
    <div className="container">
      <div className="availableTaskModal">
        <button className="modalButton" onClick={closeModal}>
          <RiCloseCircleFill />
        </button>
        <div className="box">
          <div className="left">
            <div className="userSection">
              <img src={img} alt="user-profile"></img>
              <div className="nameSection">
                <div className="name">{name}</div>
                <div className="stars">{stars}</div>
              </div>
            </div>
            <MdEmail className="email"/>
          </div>
          <div className="right">
            <div className="textSection">
              <div className="title">{title}</div>
              <div className="description">{description}</div>
            </div>
            <div className="dueSection">
              <FiClock className="clockIcon" />
              <div className="due">{due}</div>
            </div>
            {priority ? (
              <div className="priority">
                <MdPriorityHigh color="red" /> High Priority{" "}
              </div>
            ) : null}
          </div>

        </div>
        <MdReport className="report"/>
      </div>

    </div>
  );
}
