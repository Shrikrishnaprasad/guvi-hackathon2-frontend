import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { AddShoppingCart, RemoveShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 720,
    margin: "auto"
  },
  media: {
    height: 480
  }
});

export default function ProductDetails({ cartCount, setCartCount }) {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    loadProductDetail(id);
  }, []);

  function loadProductDetail(id) {
    fetch(`https://60c83b2fafc88600179f660c.mockapi.io/user/product/${id}`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((data) => setProductDetail(data));
  }
  const addCart = (id, isCart) => {
    fetch(`https://60c83b2fafc88600179f660c.mockapi.io/user/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ isCart: isCart })
    })
      .then((data) => data.json())
      .then((data) => {
        loadProductDetail(id);
        isCart ? alert("Added to cart !!") : alert("Removed from cart !!");
      });
  };

  return (
    <>
      <Card className={classes.root}>
        <Button
          onClick={() => history.goBack()}
          variant="outlined"
          color="secondary"
        >
          back
        </Button>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={productDetail.avatar}
            title={productDetail.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {productDetail.name}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="h6">
              {productDetail.category} - {productDetail.adjective}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {productDetail.desc} {productDetail.desc} {productDetail.desc}{" "}
              {productDetail.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary">
            $. {productDetail.rent}
          </Button>
          <Button size="large" color="primary">
            Hrs - {productDetail.hours}
          </Button>

          <Button
            size="large"
            style={{ color: !productDetail.isCart ? "green" : "red" }}
            onClick={() => {
              setCartCount(
                !productDetail.isCart ? cartCount + 1 : cartCount - 1
              );
              addCart(id, !productDetail.isCart);
            }}
          >
            {!productDetail.isCart ? (
              <AddShoppingCart />
            ) : (
              <RemoveShoppingCart />
            )}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
