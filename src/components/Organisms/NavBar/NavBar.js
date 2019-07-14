import React from "react";
import LeftNavBar from "components/Molecules/NavBar/LeftNavBar/LeftNavBar";
import RightNavBar from "components/Molecules/NavBar/RightNavBar/RightNavBar";

const NavBar = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "35px 160px 0px 156px",
        justifyContent: "space-around"
      }}
    >
      <LeftNavBar />
      <RightNavBar />
    </div>
  );
};

export default NavBar;
