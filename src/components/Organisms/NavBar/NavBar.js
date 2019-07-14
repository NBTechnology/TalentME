import React from "react";
import LeftNavBar from "components/Molecules/NavBar/LeftNavBar/LeftNavBar";
import RightNavBar from "components/Molecules/NavBar/RightNavBar/RightNavBar";

const NavBar = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: "35px",
        left: "160px",
        right: "156px",
        justifyContent: "space-between",
        zIndex: "999"
      }}
    >
      <LeftNavBar />
      <RightNavBar />
    </div>
  );
};

export default NavBar;
