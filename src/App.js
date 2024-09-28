// import logo from './logo.svg';
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import { Content } from "./MyComponents/Content";
import AddForm from "./MyComponents/AddForm";
import React, { useState, useEffect } from "react";
import About from "./MyComponents/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./Context/note/NoteState";
import Task from "./MyComponents/Task";

function App() {
  let initData;
  if (localStorage.getItem("allData") === null) {
    initData = [];
  } else {
    initData = JSON.parse(localStorage.getItem("allData"));
  }

  // DELETE DATA --------------------------------------------------------

  let onDelete = (data) => {
    // console.log("I on Delete of content", data);

    setCon(
      con.filter((e) => {
        return e !== data;
      }),
    );
    localStorage.setItem("allData", JSON.stringify(con));
  };

  // ADD DATA ------------------------------------------------------------

  const addForm = (title, desc) => {
    debugger;
    // console.log("I am Adding this form", title, desc);
    let sno;
    if (con.length === 0) {
      sno = 1;
    } else {
      sno = con[con.length - 1].sno + 1;
    }

    const myForm = {
      sno: sno,
      title: title,
      desc: "Lorem ipsum dolor sit aMet consectetur adiPiSiCNng Elite: " + desc,
    };
    // console.log(myForm);
    setCon([...con, myForm]);
  };

  // USE-STATE HOOK --------------------------------------------------------

  const [con, setCon] = useState(initData);

  // USE-EFFECT HOOK --------------------------------------------------------

  useEffect(() => {
    localStorage.setItem("allData", JSON.stringify(con));
  }, [con]);

  // APP-DATA RETURN-------------------------------------------------------

  return (
    <>
      <div>
        <NoteState>
          <Router>
            <Header title="My App" SearchBar={false} />

            <Routes>
              <Route path="/" element={<AddForm addForm={addForm} />} />

              <Route path="/about" element={<About />} />

              <Route path="/task" element={<Task />} />
            </Routes>

            <Content content={con} onDelete={onDelete} />

            <Footer />
          </Router>
        </NoteState>
      </div>
    </>
  );
}

export default App;
