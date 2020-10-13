import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.irwantoGanteng}</h1>
      </div>
    );
  }
}

// function Header(props) {
//   return (
//     <div>
//       <h1>{props.irwantoGanteng}</h1>
//     </div>
//   );
// }

export default Header;
