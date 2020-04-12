/* eslint-disable babel/camelcase */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { GridListTile } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
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
    maxWidth: '100%',
    maxWeight: '100%',
    padding: '20px',
    borderRadius: '20px',
    boxSizing: 'border-box',
    border: '1px solid rgba(0,0,0,0.1)',
  },
});

export default function ProductCard({ product }) {
  const classes = useStyles();

  const { id, name, image_link } = product;

  return (
    <Link href="/desc/[id]" as={`/desc/${product.id}`} key={product.id}>
      <GridListTile className={classes.tile} cols={1}>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <img
              src={product.image_link}
              alt={product.name}
              className={classes.img}
            />
          </div>
          <div className={classes.productName}>{product.name}</div>
          <div className={classes.priceRange}>
            {product.min_price} - {product.max_price}
          </div>
        </div>
      </GridListTile>
    </Link>
  );
}
