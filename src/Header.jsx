import React, { Component,useState}from "react";
import { makeStyles, ThemeProvider, createTheme, styled} from '@material-ui/core/styles';
import {AppBar, Grid} from '@material-ui/core';
import WalletCard from "./WalletCard";



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  },
  buttonConnect : {
    color: "black",
    fontSize: 14,
    fontWeight: 'bold',
}
}));





const Header = (props) => {
  const classes = useStyles();


    return (
      
      <AppBar position="sticky" color="transparent" style={{ background: 'white' }}>
          <Grid container justify={"space-between"}  position="column" >
            <Grid item xs ="1">
                  <Img alt="complex" src="img/logo_blue.jpg" />
            </Grid>
            <Grid item xs = "2"  justifyContent="flex-end">
              <h3></h3>
              <WalletCard/>
            </Grid>
        </Grid>
      </AppBar>  
    )
};

export default Header;