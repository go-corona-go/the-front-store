import { Grid, makeStyles } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Link from 'next/link';
import Layout from '../../components/Layout';

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
      maxHeight: '214px',
      maxWidth: '214px',
      marginTop: '0px'
    },
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '133',
    maxHeight: '133px',
    width: '100%',
    justifyContent: 'center',
    objectFit: 'contain',
    [theme.breakpoints.up('md')]: {
      height: '214px',
      maxHeight: '214',
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
      flexDirection: 'row'
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
    fontWeight:'600',
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
  qtyContainer:{
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
    fontSize: '18px',
    lineHeight: '26px',
    maxWidth: '100px',
    border: 'none'
  },
  button: {
    background: '#F48A28',
boxShadow: '15px 15px 50px rgba(0, 0, 0, 0.11), -30px -30px 50px rgba(255, 255, 255, 0.36)',
borderRadius: '7px',
border: 'none',
color: '#fff',
fontWeight: 'bold',
fontSize: '16px',
padding: '8px 12px',
lineHeight: '28px',
minWidth: '150px'
  }
}));
const ProductDescription = () => {
  const classes = useStyles();
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
                    src={`https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
                    alt={`Image`}
                    className={classes.img}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className={classes.detailsContainer}>
                  <div className={classes.prodName}>
                    3M 8000 3M 8812 Disposable Face Mask
                  </div>
                  <div>
                    <div className={classes.price}>
                      US $0.50 - 3.32/per unit
                    </div>
                    <div className={classes.actionContainer}>
                      <div className={classes.qtyContainer}>
                        Qty: <input className={classes.quantity} type="number" />
                      </div>
                      <button className={classes.button}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <div className={classes.title}>Description</div>
              <div className={classes.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                pharetra sit amet aliquam id diam maecenas. Dui vivamus arcu
                felis bibendum ut tristique et egestas quis. Quis vel eros donec
                ac odio tempor orci dapibus. Molestie at elementum eu facilisis
                sed odio morbi. Et magnis dis parturient montes nascetur
                ridiculus mus. Feugiat nisl pretium fusce id. Eleifend mi in
                nulla posuere sollicitudin aliquam. Viverra adipiscing at in
                tellus integer feugiat. Viverra adipiscing at in tellus integer
                feugiat. Id aliquet lectus proin nibh nisl.
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductDescription;
