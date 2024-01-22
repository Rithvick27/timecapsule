import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Capsules from "./components/Capsules";
import React, { useEffect, useState } from "react";
import Nodata from "./components/Nodata";
import Login  from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
function App() {

  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);
  const [alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //add data
  async function addNote(newNote) {
    const { text, date } = newNote;
    const response = await fetch(`${host}/api/data/addthedata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "a-token":
          localStorage.getItem("item"),
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
        "a-token":
          localStorage.getItem("item"),
      },
    });
    const json = await response.json();
    setNotes(json);
  }

  useEffect((get) => {
    if(localStorage.getItem("item"))
    {
    getallnotes();
    }
    else
    {
      
    }

  }, []);
  //delete data
  async function deletedata(id) {
    const response = await fetch(`${host}/api/data/delthedata/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "a-token":
          localStorage.getItem("item"),
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
          <Alert alert={alert}/>
          <Routes>
            <Route
              path="/capsules"
              element={
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
              }
            ></Route>
            <Route path="/" element={<Textarea onAdd={addNote} showalert={showalert} />}>
            
            </Route>
            <Route path="/login" element={<Login showalert={showalert}/>}>
             
            </Route>
            <Route path="/signup" element={<Signup showalert={showalert}/>} >
        
            </Route>
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
