import React from "react";

class FirstLast extends React.Component {
  constructor() {
    super();
  }
  removeFirstAndLast(arr) {
    if (arr.length >= 3) {
      return arr.slice(1, -1);
    } else {
      throw "You need at least three elements in the array";
    }
  }
  render() {
    return (
      <div>
        <h2>Remove First Last</h2>
        {this.removeFirstAndLast([1, 2, 3, 4, 5, 6])}
      </div>
    );
  }
}
export default FirstLast;
