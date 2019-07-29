import React from "react";
import Imagen from "components/Atoms/Imagen/Imagen";
import { Link } from "react-router-dom";

const LeftNavBar = props => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Imagen url="oficial_talentme_black.png" width="206px" height="38px" />
      </Link>
    </div>
  );
};

export default LeftNavBar;
