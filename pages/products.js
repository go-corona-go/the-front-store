import { Grid, GridList, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Layout from '../components/Layout';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';

const data = [
  {
    id: 1,
    name: 'Very bvery big name',
    priceRange: 'SU @1000 - $2000',
  },
  {
    id: 2,
    name: 'Very bvery big name',
    priceRange: 'SU @1000 - $2000',
  },
  {
    id: 3,
    name: 'Very bvery big name',
    priceRange: 'SU @1000 - $2000',
  },
  {
    id: 4,
    name: 'Very bvery big name',
    priceRange: 'SU @1000 - $2000',
  },
  {
    id: 5,
    name: 'Very bvery big name',
    priceRange: 'SU @1000 - $2000',
  },
  {
    id: 6,
    name: 'Very bvery big name',
    priceRange: 'SU @1000 - $2000',
  },
];

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
          <Filters toggleFilter={toggleFilter} />
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
            {data.map((product) => (
              <ProductCard product={product} />
            ))}
          </GridList>
          <GridList
            cellHeight={333}
            cols={1}
            spacing={20}
            className={classes.sectionMobile}
          >
            {data.map((product) => (
              <ProductCard product={product} />
              
            ))}
          </GridList>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
