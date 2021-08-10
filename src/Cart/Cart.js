import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "date-fns";
import ItemRow from "./ItemRow";

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

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setInvoiceTaxes(TAX_RATE * invoiceSubtotal);
    setInvoiceTotal(invoiceTaxes + invoiceSubtotal);
  }, [invoiceSubtotal]);
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
            <TableCell align="center" colSpan={2}>
              Date
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Rent.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
            <TableCell align="center" colSpan={2}>
              From. - To. ( * double click to select the date)
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
            />
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
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
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{invoiceTotal.toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
