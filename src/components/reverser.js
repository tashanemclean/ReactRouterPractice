import React from "react";

class Reverser extends React.Component {
  constructor() {
    super();
  }

  reverse(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }

  render() {
    return (
      <div>
        <h2>Reverser</h2>
        {this.reverse("Your")}
      </div>
    );
  }
}

export default Reverser;
