import React, { Component, useState } from "react";
import "../App.css";

// class Increment extends Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <p>Click The Button to Increment ! !</p>
//           <br></br>

//           <p>{this.state.counter}</p>

//           <button
//             onClick={() => this.setState({ counter: this.state.counter + 1 })}
//           >
//             Increment
//           </button>
//           <br></br>
//           <button
//             onClick={() => this.setState({ counter: this.state.counter - 1 })}
//           >
//             Decrement
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

function Increment() {
  const [counter, setCounter] = useState(0);

  function Increment() {
    return setCounter(counter + 1);
  }

  function Decrement() {
    return setCounter(counter - 1);
  }

  return (
    <div className="App">
      <div className="App-header">
        <p>Click The Button to Increment ! !</p>
        <br></br>

        <p>{counter}</p>

        <button onClick={() => Increment()}>Increment</button>
        <br></br>
        <button onClick={() => Decrement()}>Decrement</button>
      </div>
    </div>
  );
}

export default Increment;
