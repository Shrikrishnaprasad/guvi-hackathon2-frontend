import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import { Email, Send } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Contact() {
  const classes = useStyles();
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [username, setUsername] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userEmail && subject && desc && username) {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json"
      };
      fetch("https://node-app-krishna.herokuapp.com/contact", {
        method: "POST",
        body: JSON.stringify({ username, userEmail, subject, desc }),
        headers: headersList
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.message === "Request send !") {
            alert(data.message);
            history.push("/");
          } else {
            alert(data.message);
          }
        })
        .catch((e) => console.log(e));
    } else {
      console.log("empty");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Email />
        </Avatar>
        <Typography component="h1" variant="h5">
          Contact Us
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                autoComplete="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                id="description"
                multiline
                rows={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => handleSubmit(e)}
          >
            Send <Send style={{ marginLeft: "10px" }} />
          </Button>
        </form>
      </div>
    </Container>
  );
}
