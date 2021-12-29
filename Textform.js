import React, { useState } from "react";
export default function Textform(props) {
  const click = () => {
    // console.log("upperblock es clicked");
    let newtext = text.toUpperCase();

    setText(newtext);
    props.showAlert("converred to uppercase ! success");
  };
  const click1 = () => {
    // console.log("upperblock es clicked");
    let newtext = text.toLowerCase();

    setText(newtext);
    props.showAlert("converred to lowercase ! success");
  };
  const click2 = () => {
    // console.log("upperblock es clicked");
    let newtext = "";

    setText(newtext);
  };
  const clickOnchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={clickOnchange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button onClick={click} className="btn btn-success mx-2">
          UPPERCASE
        </button>

        <button onClick={click1} className="btn btn-success mx-2">
          Lowercase
        </button>

        <button onClick={click2} className="btn btn-success mx-2">
          cleartext
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>your test summary</h2>
        <p>
          {text.split(" ").length} word {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h2>preview </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
