import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
});

export default function ProductCard({ product }) {
  const classes = useStyles();

  const { id, name, image_link } = product;

  return (
    <Link href={`/desc/${id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            image={image_link}
            title={name}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {name}
            </Typography>
            <Typography gutterBottom component="p">
              US $0.01 - 3.32
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
