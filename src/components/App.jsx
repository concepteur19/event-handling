// import React, {useState} from "react";

// function App() {
//   const [headingText, setHeadingText] = useState("");
//   const [isMouseOver, setMouseOver] = useState(false)
//   const [name, setName] = useState("")
  
//   function handleClick(event) {
//     setHeadingText(name);

//     event.preventDefault();
//   }; 


//   function handleMouseOver() {
//     setMouseOver(true);
//   }

//   function handleMouseDown() {
//     setMouseOver(false);
//   }

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div className="container">
//       <h1> Hello {headingText}! </h1>
//       <form onSubmit={handleClick}>
//         <input
//           onChange={handleChange} 
//           type="text" 
//           placeholder="What's your name?" 
//           //value={name}
//         />
//         <button style={{backgroundColor: isMouseOver? "black" : "white"}} 
//           onMouseOver={handleMouseOver} 
//           onMouseOut={handleMouseDown}>Submit
//         </button>
//       </form>
      
//     </div>
//   );
// }

// export default App;

import React, {useState} from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    // const inputName = event.target.name;
    // const newValue = event.target.value;

    const {value, name}= event.target;

    setFullName(previous => {
      if (name === "fName") {
        return {
          fName: value,
          lName: previous.lName
        }
      } else if (name === "lName") {
        return {
          fName: previous.fName,
          lName: value
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input 
          onChange={handleChange} 
          name="fName" 
          placeholder="First Name" 
          value={fullName.fName}  
        />
        <input 
          onChange={handleChange} 
          name="lName" 
          placeholder="Last Name" 
          value={fullName.lName} 
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
