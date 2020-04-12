import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  conatiner: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 100,
  },
  loader: {
    position: 'fixed',
    top: '50%',
    width: '100%',
    color: '#F48A28',
    fontSize: '18px',
    textAlign: 'center'
  }
}));
const Error = ({text}) => {
    const classes = useStyles();
  return (
    <div className={classes.conatiner}>
      <div className={classes.loader} >{text}</div>
    </div>
  );
};

export default Error;
