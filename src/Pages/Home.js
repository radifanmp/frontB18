import React, { Component, useState } from "react";
import "../App.css";

//Import Component
import Header from "../Components/Header";
import Content from "../Components/Content";
import GuestPage from "../Pages/Guest";
import Css from "../Pages/Css";
import MapArray from "../Pages/mapArray";

//Import Pages

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Content />
//       </div>
//     );
//   }
// }

export default function Home() {
  return (
    <div className="App">
      <Header irwantoGanteng="This is Header, ini header Loh, inget Header" />
      <Content />
      <Css />
      <MapArray />
    </div>
  );
}

// export default class Conditional extends Component {
//   render() {
//     const isLoggedin = true;
//     if (isLoggedin) {
//       return <App />;
//     } else {
//       return <GuestPage />;
//     }
//   }
// }

// export default function Conditional() {
//   const [isLoggedin] = useState(true);

//   return <div>{isLoggedin ? <App /> : <GuestPage />}</div>;
// }
