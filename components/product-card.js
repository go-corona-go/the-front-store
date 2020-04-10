import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProductCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images-na.ssl-images-amazon.com/images/I/71YPSip7ELL._SX679_.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Capitol Venus N95 Particulate Respirator Dust Masks Disposable Anti
            Pollution Mask with Exhalation Valve
          </Typography>
          <Typography gutterBottom component="p">
            US $0.01 - 3.32
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
