// import React from "react";
// import LeftNavBar from "components/Molecules/NavBar/LeftNavBar/LeftNavBar";
// import RightNavBar from "components/Molecules/NavBar/RightNavBar/RightNavBar";

// const NavBar = props => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         position: "absolute",
//         top: "35px",
//         left: "160px",
//         right: "156px",
//         justifyContent: "space-between",
//         zIndex: "999"
//       }}
//     >
//       <LeftNavBar />
//       <RightNavBar />
//     </div>
//   );
// };

// export default NavBar;

import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Imagen from "components/Atoms/Imagen/Imagen";
import { Link, NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      width: "100%"
    }
  },
  sectionMobile: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  link: props => ({
    textDecoration: "none",
    color: "#000"
    // "&:hover, &:focus": {
    //   transition: ".2s all ease-in-out",
    //   color: "#ffc80a",
    //   textShadow: "0px 0px 20px rgba(255,200,10,0.74)"
    // }
  })
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "center", horizontal: "center" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      // onMouseLeave={handleMenuClose}
      style={{ marginTop: "26px" }}
    >
      <MenuItem component={Link} to="/abu-dhabi">
        Abu Dhabi
      </MenuItem>
      <MenuItem component={Link} to="/doha">
        Doha
      </MenuItem>
      <MenuItem component={Link} to="/dubai">
        Dubai
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="absolute"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <Grid container justify="center">
              <Grid item xs={11}>
                <Grid container>
                  <Grid item md={4} lg={4}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Imagen
                        url="oficial_talentme_black.png"
                        width="206px"
                        height="38px"
                      />
                    </Link>
                  </Grid>
                  <Grid
                    item
                    md={8}
                    lg={8}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <NavLink className={classes.link} onClick={handleProfileMenuOpen}>
                      <Text
                        variant="customize"
                        fontSize="12px"
                        letterSpacing="2.88px"
                        margin="0px 23px 0px 0px"
                        color="#000"
                      >
                        DESTINOS
                      </Text>
                      </NavLink>
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
                    {/* <NavLink to="/offers" className={classes.link}>
                      <Text
                        variant="customize"
                        fontSize="12px"
                        letterSpacing="2.88px"
                        margin="0px 31px 0px 0px"
                      >
                        OFERTAS
                      </Text>
                    </NavLink> */}
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
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className={classes.sectionMobile}>
            <Grid container justify="center">
              <Grid
                item
                xs={10}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Imagen
                      url="oficial_talentme_black.png"
                      width="206px"
                      height="38px"
                    />
                  </Link>
                </div>
              </Grid>
            </Grid>
            {/* <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div> */}
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
