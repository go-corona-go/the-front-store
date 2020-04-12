/* eslint-disable babel/camelcase */
import { Grid, GridList, makeStyles } from '@material-ui/core';
import { gql, useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Filters, {CATEGORY_ENUM} from '../components/Filters';
import ProductCard from '../components/ProductCard';

const GET_ALL_PRODUCTS = gql`
  query getAllProducts($category: [String!]) {
    inventory_buyer_view(where: {category: {_in: $category}}) {
      category
    id
    max_price
    min_price
    name
    image_link
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  list: {
    padding: '40px',
  },
  sectionDesktop: {
    display: 'none',
    padding: '40px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  link: {
    display: 'flex',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '28px',
    paddingLeft: '18px',
    textDecorationLine: 'underline',

    color: '#64A1F4',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sectionMobile: {
    display: 'flex',
    padding: '20px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  showForMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  showForDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [isVisble, toggleFilter] = useState(false);
  const [category, changeCategory] = useState(CATEGORY_ENUM);
  const [executeQuery, { data, loading, error }] = useLazyQuery(
    GET_ALL_PRODUCTS,
    {
      variables: {
        category
      }
    }
  );
  
  useEffect(() => {
    executeQuery();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return <div>No Products available</div>;

  const { inventory_buyer_view } = data;
  return (
    <Layout>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          md={3}
          lg={2}
          className={isVisble ? classes.showForMobile : classes.showForDesktop}
        >
          <Filters toggleFilter={toggleFilter} changeCategory={changeCategory} />
        </Grid>
        <Grid container item xs={12} md={9} lg={10}>
          <p className={classes.link} onClick={() => toggleFilter(true)}>
            Categories
          </p>
          <GridList
            cellHeight={333}
            cols={3}
            spacing={20}
            className={classes.sectionDesktop}
          >
            {inventory_buyer_view.map((product) => (
              <ProductCard product={product} />
            ))}
          </GridList>
          <GridList
            cellHeight={333}
            cols={1}
            spacing={20}
            className={classes.sectionMobile}
          >
            {inventory_buyer_view.map((product) => (
              <ProductCard product={product} />
            ))}
          </GridList>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
