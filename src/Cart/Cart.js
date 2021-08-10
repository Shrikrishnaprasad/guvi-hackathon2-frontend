import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from "@material-ui/core";
import "date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ItemRow from "./ItemRow";
import PayByRazorPay from "./PayByRazorPay";

const TAX_RATE = 0.03;

const useStyles = makeStyles({
  table: {
    minWidth: 720,
    maxWidth: 1184,
    margin: "auto"
  },
  btn: {
    background: "grey",
    color: "white",
    margin: "0px 8px",
    cursor: "pointer",
    fontSize: "20px"
  }
});

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [invoiceSubtotal, setInvoiceSubtotal] = useState(1);
  const [invoiceTaxes, setInvoiceTaxes] = useState(1);
  const [invoiceTotal, setInvoiceTotal] = useState(0);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [daysCost, setDaysCost] = useState(1);
  const [days, setDays] = useState(1);
  function getProducts() {
    fetch("https://60c83b2fafc88600179f660c.mockapi.io/user/product", {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => {
        const products = data.filter((product) => product.isCart);
        setProducts(products);
        const subTotal = products
          .map(({ rent }) => rent)
          .reduce((sum, i) => sum + +i, 0);
        setInvoiceSubtotal(subTotal);
        setInvoiceTaxes(TAX_RATE * subTotal);
        setInvoiceTotal(invoiceTaxes + subTotal);
      })
      .catch((e) => console.log(e));
  }
  const removeCart = (id) => {
    fetch(`https://60c83b2fafc88600179f660c.mockapi.io/user/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ isCart: false })
    })
      .then((data) => data.json())
      .then((data) => {
        getProducts();
        alert("Removed from cart !");
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setInvoiceTaxes(TAX_RATE * invoiceSubtotal);
    setInvoiceTotal(
      invoiceTaxes + invoiceSubtotal + (days === 1 ? 0 : daysCost)
    );
  }, [invoiceSubtotal, fromDate, toDate]);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow style={{ background: "lightgrey" }}>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Desc</b>
            </TableCell>
            <TableCell align="right">
              <b>Rent</b>
            </TableCell>
            <TableCell align="right">
              <b>Qty</b>
            </TableCell>
            <TableCell align="right">
              <b>Sum</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row, index) => (
            <ItemRow
              key={index}
              row={row}
              classbtn={classes.btn}
              setInvoiceSubtotal={setInvoiceSubtotal}
              removeCart={removeCart}
            />
          ))}

          <TableRow>
            <TableCell rowSpan={2} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{invoiceSubtotal}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{invoiceTaxes.toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} align="right">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  minDate={new Date()}
                  id="fromDate"
                  label="From-Date"
                  value={fromDate}
                  onChange={(date) => {
                    setDays(toDate.getDate() - date.getDate() + 1);
                    setFromDate(date);
                    setDaysCost(invoiceSubtotal * days);
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardDatePicker
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  minDate={fromDate}
                  id="toDate"
                  label="To-Date"
                  value={toDate}
                  onChange={(date) => {
                    setDays(date.getDate() - fromDate.getDate() + 1);
                    setToDate(date);
                    setDaysCost(invoiceSubtotal * days);
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
              ( * Double select the date)
            </TableCell>
            <TableCell colSpan={1} align="right">
              Days - {days}
            </TableCell>
            <TableCell colSpan={1} align="right">
              {days === 1 ? 0 : daysCost}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell align="right">
              <b>{invoiceTotal.toFixed(2)}</b>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <center>
        <PayByRazorPay amount={invoiceTotal.toFixed(2)} />
      </center>
    </TableContainer>
  );
}
