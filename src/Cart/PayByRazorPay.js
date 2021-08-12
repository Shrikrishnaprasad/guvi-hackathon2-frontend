import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PayByRazorPay = ({ amount, username }) => {
  const history = useHistory();

  const options = {
    key: "rzp_test_YkCd4OxHtBFQbV",
    amount: amount * 100, //  = INR 1 = 100 (so * 100)
    name: "Equipment Rental",
    description: "You are payment for Equipment Rental",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      //alert(response.razorpay_payment_id);
      alert("Payment successfully done");
      history.push("/");
    },
    prefill: {
      name: username,
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
    if (username) {
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      history.push("/login");
    }
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
        {username ? "Pay with Razorpay" : "Login to Pay"}
      </Button>
    </>
  );
};

export default PayByRazorPay;
