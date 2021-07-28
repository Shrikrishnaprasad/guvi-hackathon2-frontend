import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    textAlign: "center"
  },

  section1: {
    margin: theme.spacing(3, 2)
  },
  section2: {
    margin: theme.spacing(2)
  }
}));

export default function Details() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                Buy, Sell, Hire Used and New Construction Equipment Online
              </Typography>
            </Grid>
          </Grid>
          <Typography color="textSecondary" variant="subtitle1">
            Buy, Sell, Hire @ Equipment Rentals India (ERI)- India’s leading
            construction equipment aggregator web portal to buy, sell, and rent
            heavy construction machinery. The online portal has an extensive
            database for the contractors across the nation, to sell, purchase,
            or rent the equipment. The company aims at meeting the basic needs
            of the construction and mining industry and making the equipment
            available to the contractor in a more straightforward process and
            cost-effectively. It is an initiative by an experienced team to make
            ends meet for buyers and sellers, as the portal brings them together
            on a single platform. The process is simple for either of them, as
            they register on the website and upload their used construction
            equipment for resale, or show interest to invest in a construction
            machine.
          </Typography>
        </div>
        <Divider variant="middle" />
        <div className={classes.section2}>
          <Typography gutterBottom variant="h5">
            Lowest Price, Exclusive and Largest Choice
          </Typography>
        </div>
      </div>
      <br />
      <div className={classes.root}>
        <div className={classes.section1}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4">
                SPARE PARTS
              </Typography>
            </Grid>
          </Grid>
          <Typography color="textSecondary" variant="subtitle1">
            Spare part is the backbone of any machinery. Equipment Rentals India
            provides a wide range of all the spare parts, tools and attachments
            for your construction machinery. Equipment Rentals India ensures the
            authenticity of every spare part by providing quality spare parts,
            tools and attachments through their verified and trusted vendors.
          </Typography>
        </div>
        <Divider variant="middle" />
      </div>
    </>
  );
}
