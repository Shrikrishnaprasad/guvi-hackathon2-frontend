import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    maxWidth: "90%",
    maxHeight: 800,
    margin: "auto"
  }
});

export default function Order() {
  const classes = useStyles();
  const [rows, setRows] = React.useState([]);
  let headersList = {
    Accept: "*/*",
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTNkZDg1ZGQ2MWFhMGQ1YjRhYzVkMyIsImlhdCI6MTYyODcwNDAyMX0.u_mjLG4hgTWFFjl4UVViU_kRmeEC3841h1jlsTe6xek"
  };
  React.useEffect(() => {
    fetch("https://node-app-krishna.herokuapp.com/product/", {
      method: "GET",
      headers: headersList
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setRows(data.filter((item) => item.isCart));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <TableContainer component={Paper}>
      <br />
      <Typography variant="h4" component="h6" align="center">
        Order Details
      </Typography>
      <br />
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell>Adjective</StyledTableCell>
            <StyledTableCell>Hours</StyledTableCell>
            <StyledTableCell>Rent</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!rows && "Loading..."}
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.hours}</StyledTableCell>
              <StyledTableCell>{row.rent}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
