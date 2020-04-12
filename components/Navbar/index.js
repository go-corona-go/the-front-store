import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from './logo.svg';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    margin: '10px 0',
    height: '50px',
  },
}));

export default function Navbar({cartLength}) {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.container}>
            <div className={classes.image}>
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <Link href="/cart">
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge color="secondary" badgeContent={cartLength}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
