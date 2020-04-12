import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import NavBar from '../navbar';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const Layout = (props) => (
  <ThemeProvider theme={theme}>
    <div>
      <NavBar />
      <div style={{ padding: '0px 10px' }}>{props.children}</div>
    </div>
  </ThemeProvider>
);

export default Layout;
