import { Button } from "@material-ui/core";
import React, { useEffect } from "react";

const PayByRazorPay = ({ amount }) => {
  const options = {
    key: "rzp_test_YkCd4OxHtBFQbV",
    amount: amount * 100, //  = INR 1 = 100 (so * 100)
    name: "Equipment Rental",
    description: "You are payment for Equipment Rental",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      //alert(response.razorpay_payment_id);
      alert("Payment successfully done");
    },
    prefill: {
      name: "krishna",
      contact: "9999999999",
      email: "demo@demo.com"
    },
    notes: {
      address: "some address"
    },
    theme: {
      color: "blue",
      hide_topbar: false
    }
  };

  const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Button
        onClick={openPayModal}
        variant="contained"
        size="large"
        color="primary"
      >
        Pay with Razorpay
      </Button>
    </>
  );
};

export default PayByRazorPay;
