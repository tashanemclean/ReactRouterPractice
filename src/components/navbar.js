import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link className="Link" to="/">
        Home
      </Link>
      <Link className="Link" to="/firstandlast">
        FirstLast
      </Link>
      <Link className="Link" to="/rancolor">
        Ran Color
      </Link>
      <Link className="Link" to="/reverser">
        Reverser
      </Link>
      <Link className="Link" to="/concatli">
        Concat
      </Link>
    </div>
  );
};

export default Navbar;
