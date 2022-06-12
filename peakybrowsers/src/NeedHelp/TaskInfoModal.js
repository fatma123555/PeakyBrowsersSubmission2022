import "./TaskInfoModal.css";
import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { FiClock, FiCheckCircle } from "react-icons/fi";
import { MdPriorityHigh } from "react-icons/md";

export function TaskInfoModal({
  setShowModal,
  closeModal,
  complete,
  title,
  due,
  priority,
  location,
  description,
}) {
  return (
    <div className="container">
      <div className="TaskInfoModal">
        <button className="modalButton" onClick={closeModal}>
          <RiCloseCircleFill />
        </button>
        <div className="textSection">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        {complete ? (
          <FiCheckCircle className="complete" color="limegreen" />
        ) : (
          <div>
            <div className="dueSection">
              <FiClock className="clockIcon" />
              <div className="due">{due}</div>
            </div>
            <div className="locationSection">Location: {location}</div>
            {priority ? (
              <div className="priority">
                <MdPriorityHigh color="red" /> High Priority{" "}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
