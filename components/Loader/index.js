import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  conatiner: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    zIndex: 100,
  },
  loader: {
    position: 'fixed',
    top: '50%',
    left: '49%',
  }
}));
const Loader = () => {
    const classes = useStyles();
  return (
    <div className={classes.conatiner}>
      <CircularProgress className={classes.loader} size={70} thickness={5} color="secondary"/>
    </div>
  );
};

export default Loader;
