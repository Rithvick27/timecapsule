import React, { useState  } from "react";


export default function Textarea(props) {
  
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
    props.showalert("Message added successfully","success")
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
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter your text and time
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
            className="btn btn-primary my-3 mx-1"
            type="submit"
            onClick={handlesubmit}
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
