import react, { useState } from "react";
import "./App.css";
import Home from "./Compo/Home";
import Textform from "./Compo/Textform";
import About from "./Compo/About";
import Alert from "./Compo/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
      document.title = "iteg-dark-mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "iteg-light-mode";
    }
  };
  return (
    <div className="App">
      {/* <FetchApi /> */}
      <Home title="TextUtile" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About /> */}
        <Textform
          setAlert={showAlert}
          heading="enter the text to anaylize below"
        />
      </div>
    </div>
  );
}

export default App;
