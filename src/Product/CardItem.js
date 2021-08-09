import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { AddShoppingCart, RemoveShoppingCart } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function CardItem({ id, product, getProduct }) {
  const classes = useStyles();
  const history = useHistory();

  //const [added, setAdded] = useState(false);

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
        getProduct();
        isCart ? alert("Added to cart !!") : alert("Removed from cart !!");
      });
  };
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
          style={{ color: !product.isCart ? "green" : "red" }}
          onClick={() => {
            //setCartCount(!product.isCart ? cartCount + 1 : cartCount - 1);
            addCart(product.id, !product.isCart);
          }}
        >
          {!product.isCart ? <AddShoppingCart /> : <RemoveShoppingCart />}
        </Button>
      </CardActions>
    </Card>
  );
}
