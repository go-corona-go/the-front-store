import { Grid, GridList, GridListTile, makeStyles } from "@material-ui/core";
import { useState } from "react";
import Layout from "../components/Layout";
import Filters from "../components/Filters";

const data = [
  {
    name: "Very bvery big name",
    priceRange: "SU @1000 - $2000",
  },
  {
    name: "Very bvery big name",
    priceRange: "SU @1000 - $2000",
  },
  {
    name: "Very bvery big name",
    priceRange: "SU @1000 - $2000",
  },
  {
    name: "Very bvery big name",
    priceRange: "SU @1000 - $2000",
  },
  {
    name: "Very bvery big name",
    priceRange: "SU @1000 - $2000",
  },
  {
    name: "Very bvery big name",
    priceRange: "SU @1000 - $2000",
  },
];

const useStyles = makeStyles((theme) => ({
  list: {
    padding: "40px",
  },
  sectionDesktop: {
    display: "none",
    padding: "40px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  tile: {
    borderRadius: "20px",
    padding: "20px!important",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  link: {
    display: "flex",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "28px",
    paddingLeft: "18px",
    textDecorationLine: "underline",

    color: "#64A1F4",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionMobile: {
    display: "flex",
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  showForMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  showForDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  img: {
    maxHeight: "214px",
    maxWidth: "214px",
    height: '100%',
    width: '100%',
    objectFit: "cover",
    justifyContent: "center",
    textAlign: 'center'
  },
  productName: {
    fontSize: "14px",
    lineHeight: "19px",
    color: "#000000",
    marginBottom: "12px",
    marginTop: '12px'
  },
  priceRange: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    color: "#000000",
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
              <GridListTile
                className={classes.tile}
                key={product.name}
                cols={1}
              >
                <div
                  style={{
                    background: "#fff",
                    width: "100%",
                    height: "100%",
                    padding: "20px",
                    boxSizing: 'border-box'
                  }}
                >
                    <div style={{display: 'flex',alignItems:'center', height: '214px', maxHeight: '214px', width: '100%', justifyContent: 'center'}}>
                  <img
                    src={`https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
                    alt={product.name}
                    className={classes.img}
                  />
                  </div>
                  <div className={classes.productName}>{product.name}</div>
                  <div>{product.priceRange}</div>
                </div>
              </GridListTile>
            ))}
          </GridList>
          <GridList
            cellHeight={333}
            cols={1}
            spacing={20}
            className={classes.sectionMobile}
          >
            {data.map((tile) => (
              <GridListTile key={tile.name} cols={1}>
                <div>
                  <img
                    src={`https://dummyimage.com/250/ffffff/000000`}
                    alt={tile.name}
                    className={classes.img}
                  />
                </div>
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
