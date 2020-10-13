import React, { Component, Fragment } from "react";
import Name from "../Components/Name";
import { Link } from "react-router-dom";

//Class Component

// class Content extends Component {
//   getBatch() {
//     return 16 + 2;
//   }

//   render() {
//     const bootcamp = "Dumbways.id";
//     return (
//       <div className="App-header">
//         <p>
//           Selamat Data Batch #{this.getBatch()} Botcamp {bootcamp}
//         </p>
//       </div>
//     );
//   }
// }

//functional Component

function Content() {
  function getBatch() {
    return 16 + 2;
  }

  function exAlert() {
    return alert("This is Example Event Guyss");
  }

  const bootcamp = "Dumbways.id";

  return (
    <div className="App-header">
      <br></br>
      <br></br>
      <br></br>
      <p>
        Selamat Data Batch #{getBatch()} Botcamp {bootcamp}
      </p>

      <button onClick={() => exAlert()}>Hit Me</button>
      <br></br>
      <br></br>
      <Link to="/Guest">Logout</Link>
      <br></br>
      <img
        src="https://vignette.wikia.nocookie.net/onepiece/images/e/e1/Monkey_D._Garp_Anime_Infobox.png/revision/latest?cb=20140914022458"
        style={{ width: "300px", height: "300px" }}
      />
      <br></br>
      <br></br>
      <br></br>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/10/Zayn_Wiki_%28cropped%29.jpg"
        style={{ width: "300px", height: "300px" }}
      />

      <Name />
    </div>
  );
}

export default Content;
