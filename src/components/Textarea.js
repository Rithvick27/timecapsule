import React, { useState } from "react";

export default function Textarea(props) {
  var curr = new Date();
  const [note, setnote] = useState({
    text: "",
    date: "",
  });

  function handlesubmit(event) {
    props.onAdd(note);
    setnote({
      text: "",
      date: "",
    });
    props.showalert("Message added successfully", "success");
  }

  function handleonchange(event) {
    const { name, value } = event.target;

    setnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <form>
        <div className="container mb-3 my-5" id="text">
          <div className="d-flex">
            <h3
              className={
                curr.getHours() >= 6 && curr.getHours() <= 17
                  ? "arvo-regular "
                  : "arvo-regular night  "
              }
            >
              Hello!{" "}
            </h3>
            <h4
              className={
                curr.getHours() >= 6 && curr.getHours() <= 17
                  ? "mx-2 my-1 arvo-regular "
                  : "mx-2 my-1 arvo-regular night  "
              }
            >
              {localStorage.getItem("name")}
            </h4>
          </div>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h4
              className={
                curr.getHours() >= 6 && curr.getHours() <= 17
                  ? "arvo-regular "
                  : "arvo-regular night  "
              }
            >
              Enter your message and time
            </h4>
          </label>
          <textarea
            type="text"
            className="form-control"
            name="text"
            value={note.text}
            onChange={handleonchange}
            rows="3"
            minLength={5}
          ></textarea>
          <input
            type="date"
            name="date"
            value={note.date}
            onChange={handleonchange}
          />
          <input
            className={
              curr.getHours() >= 6 && curr.getHours() <= 17
                ? "btn btn-primary my-3 mx-1 arvo-regular"
                : "btn btn-dark my-3 mx-1 arvo-regular"
            }
            type="submit"
            onClick={handlesubmit}
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
