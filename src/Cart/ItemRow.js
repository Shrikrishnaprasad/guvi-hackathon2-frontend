import { TableCell, TableRow } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { useState } from "react";

export default function ItemRow({ row, classbtn, setInvoiceSubtotal }) {
  const [itemCount, setItemCount] = useState(1);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  return (
    <TableRow key={row.id}>
      <TableCell>{row.name}</TableCell>
      <TableCell align="right">{row.rent}</TableCell>
      <TableCell align="right">
        <button
          className={classbtn}
          onClick={() => {
            if (itemCount !== 1) {
              setInvoiceSubtotal((prev) => {
                return prev - +row.rent;
              });
              setItemCount(itemCount - 1);
            }
          }}
        >
          -
        </button>
        {itemCount}
        <button
          className={classbtn}
          onClick={() => {
            setInvoiceSubtotal((prev) => {
              return prev + +row.rent;
            });
            setItemCount(itemCount + 1);
          }}
        >
          +
        </button>
      </TableCell>
      <TableCell align="right"> {row.rent * itemCount}</TableCell>
      <TableCell align="right">
        <MuiPickersUtilsProvider key={row.id} utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            minDate={new Date()}
            id="fromDate"
            label="From-Date"
            value={fromDate}
            onChange={(date) => setFromDate(date)}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            minDate={new Date()}
            id="toDate"
            label="To-Date"
            value={toDate}
            onChange={(date) => setToDate(date)}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
      </TableCell>
    </TableRow>
  );
}
