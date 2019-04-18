import React from "react";

class Rancolor extends React.Component {
  constructor() {
    super();
  }

  ranColor() {
    return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }

  render() {
    return (
      <div>
        <h2>Random Color</h2>
        {this.ranColor()}
      </div>
    );
  }
}

export default Rancolor;
