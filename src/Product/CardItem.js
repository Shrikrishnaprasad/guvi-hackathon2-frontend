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
import {
  AddShoppingCart,
  Create,
  DeleteForever,
  RemoveShoppingCart
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";

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
  const { username } = useGlobalContext();

  //const [added, setAdded] = useState(false);
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTNkZDg1ZGQ2MWFhMGQ1YjRhYzVkMyIsImlhdCI6MTYyODcwNDAyMX0.u_mjLG4hgTWFFjl4UVViU_kRmeEC3841h1jlsTe6xek"
  };
  const addCart = (id, isCart) => {
    fetch(`https://node-app-krishna.herokuapp.com/product/${id}`, {
      method: "PUT",
      headers: headersList,
      body: JSON.stringify({ isCart: isCart })
    })
      .then((data) => data.json())
      .then((data) => {
        getProduct();
        isCart ? alert("Added to cart !!") : alert("Removed from cart !!");
      });
  };
  const deleteProduct = (id) => {
    fetch(`https://node-app-krishna.herokuapp.com/product/${id}`, {
      method: "DELETE",
      headers: headersList
    })
      .then((data) => data.json())
      .then((data) => {
        getProduct();
        alert("Product deleted !");
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
          <Typography gutterBottom variant="h6" component="h3">
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
          {product.hours} - hrs
        </Button>
        <Button size="large" style={{ color: "green" }}>
          $.{product.rent}
        </Button>

        {username === "admin" ? (
          <>
            <Button
              color="primary"
              onClick={() => history.push(`/editProduct/${product._id}`)}
            >
              <Create />
            </Button>
            <Button
              color="secondary"
              onClick={() => deleteProduct(product._id)}
            >
              <DeleteForever />
            </Button>
          </>
        ) : (
          <Button
            size="large"
            style={{ color: !product.isCart ? "green" : "red" }}
            onClick={() => {
              //setCartCount(!product.isCart ? cartCount + 1 : cartCount - 1);
              addCart(product._id, !product.isCart);
            }}
          >
            {!product.isCart ? <AddShoppingCart /> : <RemoveShoppingCart />}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
