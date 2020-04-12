/* eslint-disable babel/camelcase */
import { Grid, makeStyles } from '@material-ui/core';
import { useState, useContext } from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { addToCart } from '../../utils/cart-utils';
import { CartContext } from '../_app';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: Int!) {
    inventory_buyer_view(where: { id: { _eq: $id } }) {
      category
      id
      description
      max_price
      min_price
      name
      image_link
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    marginTop: '20px',
    [theme.breakpoints.up('md')]: {
      marginTop: '50px',
    },
  },
  backButton: {
    display: 'flex',
    padding: '0 32px',
    alignItems: 'center',
    boxSizing: 'border-box',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
  img: {
    maxHeight: '133px',
    maxWidth: '133px',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: '20px',
    [theme.breakpoints.up('md')]: {
      maxHeight: '300px',
      maxWidth: '300px',
      marginTop: '0px',
    },
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '133px',
    maxHeight: '133px',
    width: '100%',
    justifyContent: 'center',
    objectFit: 'contain',
    [theme.breakpoints.up('md')]: {
      height: '300px',
      maxHeight: '300px',
    },
  },
  descContainer: {
    background: '#fff',
    padding: '20px',
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0,0.2)',
    margin: '20px',
    [theme.breakpoints.up('md')]: {
      padding: '50px',
      margin: '0px',
    },
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '25px',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  detailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    marginLeft: '15px',
  },
  prodName: {
    fontSize: '22px',
    lineHeight: '28px',
    marginTop: '50px',
    [theme.breakpoints.up('md')]: {
      fontSize: '36px',
      lineHeight: '49px',
      marginTop: '0px',
    },
  },
  price: {
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '24px',
    marginTop: '50px',
    [theme.breakpoints.up('md')]: {
      fontSize: '28px',
      lineHeight: '49px',
      marginTop: '10px',
    },
  },
  title: {
    marginTop: '30px',
    fontWeight: '600',
    fontSize: '36px',
    lineHeight: '42px',
  },
  desc: {
    marginTop: '50px',
    fontSize: '18px',
    lineHeight: '25px',
  },
  qtyContainer: {
    border: '0.5px solid #413D3D',
    boxSizing: 'border-box',
    display: 'flex',
    alignSelf: 'center',
    padding: '2px',
    marginBottom: '20px',
    [theme.breakpoints.up('md')]: {
      marginTop: '10px',
      marginBottom: '0px',
    },
  },
  quantity: {
    fontWeight: 'bold',
    paddingLeft: '10px',
    fontSize: '18px',
    lineHeight: '26px',
    maxWidth: '100px',
    border: 'none',
  },
  button: {
    background: '#F48A28',
    boxShadow:
      '15px 15px 50px rgba(0, 0, 0, 0.11), -30px -30px 50px rgba(255, 255, 255, 0.36)',
    borderRadius: '7px',
    border: 'none',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '8px 12px',
    lineHeight: '28px',
    minWidth: '150px',
  },
}));

const ProductDescription = () => {
  const {refreshCart} = useContext(CartContext);
  const classes = useStyles();
  const router = useRouter();
  const [item_units, setQty] = useState(0);
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      id: router.query.id,
    },
  });

  if (loading) return <Layout><Loader /></Layout>;
  if (error) return <Layout><Error text="Something went wrong" /></Layout>;
  if (!data) return <Layout><Error text="No Product Details Available" /></Layout>;
  const { inventory_buyer_view } = data;
  const addCart = () => {
    const product = {
      ...inventory_buyer_view[0],
      item_units
    }
    if(Number(item_units) <= 0) return;
    addToCart(product);
    setQty(0)
    refreshCart();
  }
  return (
    <Layout>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={2}>
          <Link href="/products">
            <div className={classes.backButton}>
              <ArrowBack />
              <span style={{ marginLeft: '10px' }}>{`Back`}</span>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} md={9}>
          <div className={classes.descContainer}>
            <Grid
              container
              style={{
                borderBottom: '1px solid #A99292',
                paddingBottom: '44px',
              }}
            >
              <Grid item xs={12} md={4}>
                <div className={classes.imageContainer}>
                  <img
                    // TODO Change link
                    src={inventory_buyer_view[0].image_link}
                    alt={`Image`}
                    className={classes.img}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className={classes.detailsContainer}>
                  <div className={classes.prodName}>
                    {inventory_buyer_view[0].name}
                  </div>
                  <div>
                    <div className={classes.price}>
                      {inventory_buyer_view[0].min_price} -{' '}
                      {inventory_buyer_view[0].max_price}
                    </div>
                    <div className={classes.actionContainer}>
                      <div className={classes.qtyContainer}>
                        Qty:{' '}
                        <input value={item_units} onChange={e => setQty(Number(e.target.value))} className={classes.quantity} type="number" />
                      </div>
                      <button onClick={() => addCart()} className={classes.button} >Add to Cart</button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.title}>Description</div>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.desc}>
                  {inventory_buyer_view[0].description}
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductDescription;
