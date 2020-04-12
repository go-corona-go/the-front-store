import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import NavBar from '../Navbar';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const Layout = (props) => (
  <ThemeProvider theme={theme}>
    <NavBar />
    {props.children}
  </ThemeProvider>
);

export default Layout;
