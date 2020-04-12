import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    background: '#fff',
    minHeight: '100vh',
    height: '100%',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
  },
  title: {
    fontFamily: 'Raleway',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '28px',
    padding: '0 23px',
  },
  text: {
    fontSize: '18px',
    lineHeight: '25px',
  },
  item: {
    justifyContent: 'flex-start',
  },
  icon: {},
}));

export const CATEGORY_ENUM = ['Mask', 'Sanitizer'];

const Filters = ({ toggleFilter, changeCategory }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p className={classes.title}>Categories</p>
      <List component="nav">
        {CATEGORY_ENUM.map((category, i) => (
          <ListItem
            button
            className={classes.item}
            key={i}
            onClick={() => {
              changeCategory([`${category}`]);
              toggleFilter(false);
            }}
          >
            <ChevronRight className={classes.icon} />
            <ListItemText className={classes.text} primary={category} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Filters;
