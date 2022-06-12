import "./newTaskModal.css";
import { FiUpload, FiClock } from "react-icons/fi";
import { RiCloseCircleFill } from "react-icons/ri";
import React, { useState } from "react";

export function Modal({ setShowModal, closeModal }) {
  const [submitted, setSubmitted] = useState(false);

  const submitClick = () => {
    setSubmitted(true);
    let taskTitle = document.getElementById("title").value;
    let taskDesc = document.getElementById("desc").value;
    let taskDate = document.getElementById("dueDate").value;
    let taskPriority =
      document.querySelector('input[name="priority"]:checked').value === "high"
        ? true
        : false;
    let taskLocation =
      document.querySelector('input[name="location"]:checked').value ===
      "remote"
        ? "Remote"
        : document.getElementById("inperson-location").value;
    let obj = {
      title: taskTitle,
      description: taskDesc,
      complete: false,
      due: taskDate,
      priority: taskPriority,
      location: taskLocation,
    };
    localStorage.setItem("newTasks", JSON.stringify([...JSON.parse(localStorage.getItem("newTasks") || "[]"), obj]));
  };

  const closeSubmit = () => {
    setSubmitted(false);
    closeModal();
  };

  const Form = () => {
    return (
      <div>
        <div className="heading">Create New Task | створити нове завдання</div>
        <form className="form">
          <div className="label">Task Title | назва завдання</div>
          <input className="textbox" type="text" required id="title"></input>
          <div className="label">Details | деталі</div>
          <textarea
            className="textbox"
            placeholder="Please give a brief description about the task you need help with...&#10;Будь ласка, коротко опишіть завдання, з яким вам потрібна допомога..."
            type="text"
            name="details"
            id="desc"
            required
          ></textarea>
          <div className="label"> Duration | тривалість</div>
          <label className="duration">
            <div className="radios">
              <div className="radio">
                <input type="radio" name="duration" value="small" checked />
                <FiClock /> 0-15m
              </div>
              <div className="radio">
                <input type="radio" name="duration" value="small" checked />
                <FiClock /> 15-30m
              </div>
              <div className="radio">
                <input type="radio" name="duration" value="small" checked />
                <FiClock /> 30-1h
              </div>
              <div className="radio">
                <input type="radio" name="duration" value="small" checked />
                <FiClock /> 1h+
              </div>
            </div>
          </label>
          <div className="label">Due date | термін виконання</div>
          <div className="dateBox">
            <input
              type="date"
              id="dueDate"
              min="2022-06-09"
              max="2032-01-01"
            ></input>
          </div>
          <div className="label">Priority | пріоритет</div>
          <div className="radios">
            <div className="radio">
              <input
                type="radio"
                id="low"
                checked="checked"
                value="low"
                name="priority"
              ></input>
              <label for="low">Low | низький</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="medium"
                value="medium"
                name="priority"
              ></input>
              <label for="medium">Medium | середній</label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="high"
                value="high"
                name="priority"
              ></input>
              <label for="high">High | високий</label>
            </div>
          </div>
          <div className="location">
            <div className="label">Location | Місцезнаходження</div>
            <div className="radios-location">
              <div className="radio">
                <input
                  type="radio"
                  id="remote"
                  value="remote"
                  name="location"
                  checked="checked"
                ></input>
                <label for="remote">Remote | дистанційно</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  id="in-person"
                  value="in-person"
                  name="location"
                ></input>
                <label for="in-person">In-Person | на місці</label>
                <div className="location-hidden" id="hiddenLocation">
                  <div className="locationLabel">
                    <div>Please enter a location for this task:</div>
                    <div>
                      Будь ласка, введіть місцезнаходження для цього завдання:
                    </div>
                  </div>
                  <input
                    className="locationTextbox"
                    type="text"
                    id="inperson-location"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="label">Upload Image | Завантажити зображення</div>
          <form className="imageUpload" action="/action_page.php">
            <div className="files">
              <input type="file" id="myFile" name="filename"></input>
              <button type="submit" value="Upload File">
                <FiUpload id="uploadIcon" />
              </button>
            </div>
          </form>

          <button onClick={submitClick} className="submitButton">
            <i class="fa fa-check-circle"></i>
          </button>
        </form>
      </div>
    );
  };

  const Submitted = () => {
    return (
      <div className="submittedContainer">
        <div className="submittedMessage">
          Thank you, your task has been submitted.
        </div>
        <div className="submittedMessage">Дякую, ваше завдання створено.</div>
        <button onClick={closeSubmit}>
          <i class="fa fa-check-circle"></i>
        </button>
      </div>
    );
  };
  return (
    <div className="container">
      <div className="newTaskModal">
        <button className="modalButton" onClick={closeModal}>
          <RiCloseCircleFill />
        </button>
        {submitted ? <Submitted /> : <Form />}
      </div>
    </div>
  );
}
