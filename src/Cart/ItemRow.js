import { TableCell, TableRow } from "@material-ui/core";
import { Remove } from "@material-ui/icons";

import { useState } from "react";

export default function ItemRow({
  row,
  classbtn,
  setInvoiceSubtotal,
  removeCart
}) {
  const [itemCount, setItemCount] = useState(1);

  return (
    <TableRow key={row._id}>
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
      <TableCell>
        {" "}
        <Remove
          color="secondary"
          style={{
            background: "lightgrey",
            borderRadius: "24px",
            cursor: "pointer",
            padding: "4px"
          }}
          onClick={() => removeCart(row._id)}
        />{" "}
      </TableCell>
    </TableRow>
  );
}
