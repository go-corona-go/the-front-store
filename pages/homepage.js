import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import Error from '../components/Error';

const GET_ALL_PRODUCTS = gql`
  query getAllProducts($category: [String!]) {
    inventory_buyer_view(limit: 4) {
      category
      id
      max_price
      min_price
      name
      image_link
    }
  }
`;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: '20px',
  },
  banner: {
    backgroundColor: 'black',
    height: '500px',
    width: '100%',
    borderRadius: '0 0 55% 55%',
    backgroundImage: 'url("home.svg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    color: '#fff',
    textAlign: 'center',
    fontSize: '4.5rem',
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  p: {
    margin: 0,
    padding: '10px',
  },
  paper: {
    height: 140,
    width: 100,
  },
  mission: {
    fontSize: '1.2rem',
  },
  allProducts: {
    position: 'relative',
  },
  forwardButton: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: '10px',
    margin: '20px',
    fontSize: '20px',
    fontWeight: '600',
    cursor: 'pointer',
  },
}));

const Homepage = () => {
  const [spacing, setSpacing] = useState(1);
  const classes = useStyles();

  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <Layout><Loader /></Layout>;
  if (error) return <Layout><Error text="Something went wrong" /></Layout>;
  if (!data) return <Layout><Error text="No Products Available" /></Layout>;

  const { inventory_buyer_view } = data;

  return (
    <Layout>
      <div className={classes.banner}>
        <p className={classes.p}>Together.</p>
        <p className={classes.p}>We got this.</p>
      </div>
      <div className={classes.root}>
        <section>
          <h1>Our Mission</h1>
          <p className={classes.mission}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
        <section>
          <h1>Products</h1>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="flex-start" spacing={spacing}>
                {inventory_buyer_view.map((product) => (
                  <Grid key={product.id} item>
                    <ProductCard product={product} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </section>
        <Link href="/products">
          <div className={classes.allProducts}>
            <div className={classes.forwardButton}>
              <ArrowForward />
              <span style={{ marginLeft: '10px' }}>{`See more`}</span>
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Homepage;
