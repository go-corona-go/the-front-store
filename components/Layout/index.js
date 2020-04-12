import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import NavBar from '../Navbar';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const Layout = (props) => (
  <ThemeProvider theme={theme}>
    <div>
      <NavBar />
      {props.children}
    </div>
  </ThemeProvider>
);

export default Layout;
