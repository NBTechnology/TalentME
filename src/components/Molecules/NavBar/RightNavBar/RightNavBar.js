import React from "react";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  link: props => ({
    textDecoration: "none",
    color: "#000",
    "&:hover, &:focus": {
      transition: ".2s all ease-in-out",
      color: "#fff"
    }
  })
}));
const RightNavBar = props => {
  const classes = useStyles(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Text
        variant="customize"
        fontSize="12px"
        letterSpacing="2.88px"
        margin="0px 23px 0px 0px"
      >
        DESTINOS
      </Text>
      <NavLink to="/como-funciona" className={classes.link}>
        <Text
          variant="customize"
          fontSize="12px"
          letterSpacing="2.88px"
          margin="0px 23px 0px 0px"
        >
          COMO FUNCIONA
        </Text>
      </NavLink>
      <NavLink to="/about-us" className={classes.link}>
        <Text
          variant="customize"
          fontSize="12px"
          letterSpacing="2.88px"
          margin="0px 23px 0px 0px"
        >
          NOSOTROS
        </Text>
      </NavLink>
      <NavLink to="/contact-us" className={classes.link}>
        <Text
          variant="customize"
          fontSize="12px"
          letterSpacing="2.88px"
          margin="0px 23px 0px 0px"
        >
          CONTACTO
        </Text>
      </NavLink>
      <Text
        variant="customize"
        fontSize="12px"
        letterSpacing="2.88px"
        margin="0px 31px 0px 0px"
      >
        OFERTAS
      </Text>
      <Button
        variant="primary"
        width="127px"
        height="38px"
        isBold
        fontSize="12px"
        letterSpacing="2.4px"
        margin="0px 96px 0 0"
        link="/inscribirse"
      >
        INSCRIBIRSE
      </Button>
    </div>
  );
};

export default RightNavBar;
