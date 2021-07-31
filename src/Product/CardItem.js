import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AddShoppingCart, RemoveShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function CardItem({ id, product, cartCount, setCartCount }) {
  const classes = useStyles();
  const history = useHistory();

  const [added, setAdded] = useState(false);
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => history.push(`/productDetails/${id}`)}>
        <CardMedia
          className={classes.media}
          image={product.avatar}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.adjective}
            {"- "}
            {product.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="secondary">
          {product.hours.toString()[1] == 0
            ? product.hours.toString()[2]
            : product.hours.toString()[1]}{" "}
          - hrs
        </Button>
        <Button size="large" style={{ color: "green" }}>
          $.{product.rent}
        </Button>
        <Button
          size="large"
          style={{ color: !added ? "green" : "red" }}
          onClick={() => {
            setCartCount(!added ? cartCount + 1 : cartCount - 1);
            setAdded(!added);
          }}
        >
          {!added ? <AddShoppingCart /> : <RemoveShoppingCart />}
        </Button>
      </CardActions>
    </Card>
  );
}
