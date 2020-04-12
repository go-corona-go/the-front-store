import Layout from "../components/Layout";
import Link from "next/link";
import Delete from '@material-ui/icons/Delete';

import { makeStyles, Grid } from "@material-ui/core";
import { getCartDetails, modifyQty, removeItem } from "../utils/cart-utils";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./_app";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "36px",
    boxSizing: "border-box",
  },
  title: {
    fontWeight: 600,
    fontSize: "36px",
    lineHeight: "42px",
  },
  buttonContainer: {
    padding: "25px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    background: "#F48A28",
    boxShadow:
      "15px 15px 50px rgba(0, 0, 0, 0.11), -30px -30px 50px rgba(255, 255, 255, 0.36)",
    borderRadius: "7px",
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "8px 12px",
    lineHeight: "28px",
    minWidth: "150px",
  },
  image: {
    height: "150px",
    width: "150px",
  },
  productContainer: {
    padding: "21px",
    boxSizing: "border-box",
    background: "#fff",
    marginBottom: "28px",
    boxShadow: '30px 30px 50px rgba(0, 0, 0, 0.08), -30px -30px 50px rgba(255, 255, 255, 0.36)',
borderRadius: '20px'
  },
  name: {
    fontSize: "18px",
    lineHeight: "25px",
  },
  price: {
    fontSize: "18px",
    lineHeight: "25px",
    color: "#EF0E00",
    marginTop: "20px",
  },
  qtyContainer: {
    border: "0.5px solid #413D3D",
    boxSizing: "border-box",
    display: "flex",
    alignSelf: "center",
    padding: "2px",
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      marginTop: "10px",
      marginBottom: "0px",
    },
  },
  quantity: {
    fontWeight: "bold",
    paddingLeft: '10px',
    fontSize: "18px",
    lineHeight: "26px",
    maxWidth: "100px",
    border: "none",
  },
  actionContainer: {
    flexDirection: 'row',
    display: 'flex',
    marginTop: "20px",
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up("md")]: {
        marginTop: "0px",
        flexDirection: 'column',
      },
  },
removeBtn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));
const Cart = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const {refreshCart} = useContext(CartContext);

  const refreshDetails = () => {
      setCartDetails(getCartDetails());
  }
  useEffect(() => {
    refreshDetails();
  }, []);
  const setQty= (id, newQty) => {
    modifyQty(id, newQty);
    refreshDetails();
  }
  const removeProduct = (id) => {
    removeItem(id);
    refreshDetails();
    refreshCart();
  }
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.title}>{cartDetails.length} Items in Cart</div>
        <Grid container style={{ marginTop: "10px" }}>
          <Grid item xs={12} md={9}>
            {cartDetails.map((product) => {
              return (
                <Grid item container className={classes.productContainer}>
                  <Grid item xs={12} md={3}>
                    <img
                      className={classes.image}
                      src={product.image_link}
                      alt={product.name}
                    />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <div className={classes.name}>{product.name}</div>
                    <div className={classes.price}>
                      {product.min_price} - {product.max_price}
                    </div>
                  </Grid>
                  <Grid item xs={12} md={2} className={classes.actionContainer}>
                    <div className={classes.qtyContainer}>
                      Qty:{" "}
                      <input
                        value={product.item_units}
                        onChange={(e) => setQty(product.id, Number(e.target.value))}
                        className={classes.quantity}
                        type="number"
                      />
                    </div>
                    <button className={classes.removeBtn} onClick={() => removeProduct(product.id)}>
                        <Delete /> <span>Remove</span>
                    </button>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} md={3} className={classes.buttonContainer}>
            <Link href="/order">
              <button className={classes.button}>Place Order</button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Cart;
