import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import React, { useContext } from "react";
import NavBar from "../Navbar";
import { CartContext } from "../../pages/_app";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const Layout = (props) => {
  const { cartLength } = useContext(CartContext);

  return (
    <ThemeProvider theme={theme}>
        <NavBar cartLength={cartLength} />
        <div style={{ padding: "0px 10px" }}>{props.children}</div>
    </ThemeProvider>
  );
};

export default Layout;
