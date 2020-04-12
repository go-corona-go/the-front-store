import { makeStyles, GridListTile } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  tile: {
    borderRadius: '20px',
    padding: '20px!important',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  img: {
    maxHeight: '214px',
    maxWidth: '214px',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    justifyContent: 'center',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '214px',
    maxHeight: '214px',
    width: '100%',
    justifyContent: 'center',
  },
  productName: {
    fontSize: '14px',
    lineHeight: '19px',
    color: '#000000',
    marginBottom: '12px',
    marginTop: '12px',
  },
  priceRange: {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '19px',
    color: '#000000',
  },
  container: {
    background: '#fff',
    width: '100%',
    height: '100%',
    padding: '20px',
    borderRadius: '20px',
    boxSizing: 'border-box',
    border: '1px solid rgba(0,0,0,0.1)',
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  return (
    <Link href="/desc/[id]" as={`/desc/${product.id}`} key={product.id}>
      <GridListTile className={classes.tile} cols={1}>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <img
            // TODO: Change the url to url from API
              src={`https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
              alt={product.name}
              className={classes.img}
            />
          </div>
          <div className={classes.productName}>{product.name}</div>
          <div className={classes.priceRange}>{product.min_price} - 
    ${product.max_price}</div>
        </div>
      </GridListTile>
    </Link>
  );
};

export default ProductCard;
