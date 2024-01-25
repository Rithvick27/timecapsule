import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Capsules from "./components/Capsules";
import React, { useEffect, useState } from "react";
import Nodata from "./components/Nodata";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Info from "./components/Info";
function App() {
  const host = process.env.REACT_APP_host;
  const [notes, setNotes] = useState([]);
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //add data
  async function addNote(newNote) {
    const { text, date } = newNote;
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/data/addthedata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "a-token": localStorage.getItem("item"),
      },

      body: JSON.stringify({ text, date }), // body data type must match "Content-Type" header
      
    });
  }
  // fetching all data
  async function getallnotes() {
    const response = await fetch(`${host}/api/data/getthedata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "a-token": localStorage.getItem("item"),
      },
    });
    const json = await response.json();
    setNotes(json);
  }

  useEffect((get) => {
    if (localStorage.getItem("item")) {
      getallnotes();
    } else {
    }
    // eslint-disable-next-line
  }, []);
  //delete data
  async function deletedata(id) {
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/data/delthedata/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "a-token": localStorage.getItem("item"),
      },
    });

    const newdata = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newdata);
  }
  return (
    <Router>
      <div>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/capsules"
            element={
              localStorage.getItem("item") ? (
                notes.length === 0 ? (
                  <Nodata />
                ) : (
                  notes.map((noteItem, index) => {
                    return (
                      <Capsules
                        showalert={showalert}
                        key={index}
                        id={noteItem._id}
                        text={noteItem.text}
                        date={noteItem.date}
                        delete={deletedata}
                      />
                    );
                  })
                )
              ) : (
                <Info />
              )
            }
          ></Route>
          <Route
            path="/add"
            element={
              localStorage.getItem("item") ? (
                <Textarea onAdd={addNote} showalert={showalert} />
              ) : (
                <Info />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login showalert={showalert} />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup showalert={showalert} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
