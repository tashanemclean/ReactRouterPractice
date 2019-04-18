import React from "react";

class ConcatList extends React.Component {
  constructor() {
    super();
  }

  concat() {
    const heroes = ["Midorya", "Bakugo", "All Might"];
    const villains = ["Stain", "All For One", "Kurogiri"];
    const mha = heroes.concat(villains);
    return mha;
  }

  render() {
    return (
      <div>
        <h2>Concat List</h2>
        {this.concat()}
      </div>
    );
  }
}

export default ConcatList;
