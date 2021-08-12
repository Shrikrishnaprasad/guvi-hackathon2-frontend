import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardItem from "./CardItem";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0)
  },
  heroButtons: {
    marginTop: theme.spacing(2)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default function Product({ cartCount, setCartCount }) {
  const classes = useStyles();
  const history = useHistory();
  const { username } = useGlobalContext();

  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [category, setCategory] = useState([]);
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTNkZDg1ZGQ2MWFhMGQ1YjRhYzVkMyIsImlhdCI6MTYyODcwNDAyMX0.u_mjLG4hgTWFFjl4UVViU_kRmeEC3841h1jlsTe6xek"
  };
  function getProduct() {
    fetch("https://node-app-krishna.herokuapp.com/product", {
      method: "GET",
      headers: headersList
    })
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
        setProductsFilter(data);
        const count = data.filter((product) => product.isCart).length;
        setCartCount(count);
      })
      .catch((e) => console.log(e));
  }
  function getCategory() {
    fetch("https://node-app-krishna.herokuapp.com/product", {
      method: "GET",
      headers: headersList
    })
      .then((data) => data.json())
      .then((data) => {
        //setProducts(data);
        const allcategory = [
          "All",
          ...new Set(data.map((item) => item.category))
        ];
        setCategory(allcategory);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  const handleFilter = (category) => {
    //getProduct();
    if (category === "All") {
      setProducts(productsFilter);
      return;
    }
    //getProduct();
    const newFilter = productsFilter.filter(
      (item) => item.category === category
    );
    setProducts(newFilter);
  };
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          {username === "admin" ? (
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{ float: "right" }}
              onClick={() => history.push("/addProduct")}
            >
              Add product
            </Button>
          ) : (
            ""
          )}
          <Container maxWidth="sm">
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Products
            </Typography>

            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {category.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      variant="outlined"
                      color="primary"
                      onClick={() => handleFilter(item)}
                    >
                      {item}
                    </Button>
                  );
                })}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {products.length === 0 && (
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textSecondary"
              gutterBottom
            >
              Loading. . . .
            </Typography>
          )}
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                <CardItem
                  id={product._id}
                  product={product}
                  getProduct={getProduct}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* End footer */}
    </React.Fragment>
  );
}
