import React from "react"
import { AppBar, Toolbar, ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffab91',
          },
          secondary: {
            main: '#4db6ac',
          },
    },
  });

function Header(){
    return(
        <ThemeProvider theme={theme}>
        <AppBar position="static" className="header" >
        <Toolbar>
        <img
                className="headerImg"
                src="https://ggscore.com/media/logo/t51940.png?32"
                alt="doge"
            />
            <p >Mheheh</p>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
            
      
    )
}

export default Header
