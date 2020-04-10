import Navbar from '../components/navbar';
import ProductCard from '../components/product-card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    // padding: theme.spacing(1),
  },
}));

const Homepage = () => {
  const [spacing, setSpacing] = React.useState(1);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (
    <>
      <Navbar />
      <section>
        <h1>Our Mission</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      <section>
        <h1>Products</h1>

        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="flex-start" spacing={spacing}>
              {[0, 1, 2, 3].map((value) => (
                <Grid key={value} item>
                  <ProductCard />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Homepage;
