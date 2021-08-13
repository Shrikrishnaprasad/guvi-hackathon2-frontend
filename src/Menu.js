import { AppBar, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import { Badge, IconButton } from "@material-ui/core";
import { useGlobalContext } from "./context";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    cursor: "pointer",
    color: "white"
  },

  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `3px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function Menu({ cartCount }) {
  const classes = useStyles();
  const history = useHistory();
  const {
    loginToken,
    setLoginToken,
    username,
    setUsername
  } = useGlobalContext();
  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          >
            Equipment Rental
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              className={classes.link}
              onClick={() => history.push("/")}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              className={classes.link}
              onClick={() => history.push("/product")}
            >
              Product
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              className={classes.link}
              onClick={() => history.push("/cart")}
            >
              Cart
              <IconButton>
                <StyledBadge badgeContent={cartCount} color="secondary">
                  <ShoppingCart style={{ color: "white" }} />
                </StyledBadge>
              </IconButton>
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              className={classes.link}
              onClick={() =>
                history.push(
                  username === "admin" ? "/contactDetails" : "/contact"
                )
              }
            >
              {username === "admin" ? "Contact Details" : " Contact us"}
            </Link>
          </nav>
          {username === "admin" && (
            <Link
              variant="button"
              color="textPrimary"
              className={classes.link}
              onClick={() => history.push("/order")}
            >
              Orders
            </Link>
          )}
          {loginToken && (
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              onClick={() => history.push("/")}
            >
              Hi, {username}
            </Typography>
          )}
          <Button
            color="primary"
            variant="contained"
            className={classes.link}
            onClick={() => {
              history.push("/login");
              setUsername("");
              loginToken ? setLoginToken("") : history.push("/login");
            }}
            style={{ background: "whitesmoke", color: "blue" }}
          >
            {!loginToken ? "Login" : "Logout"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
