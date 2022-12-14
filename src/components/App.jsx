import React, {useState} from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  
  function handleClick() {
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1> {headingText} </h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
