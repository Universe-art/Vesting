import React, { Component } from "react";
import { makeStyles, ThemeProvider, createTheme, styled} from '@material-ui/core/styles';
import {Container, Grid, Paper, Typography} from '@material-ui/core'


import "./App.css";




const themePaper = createTheme({
    paper: {
      width: "100%",
      Height: "500vh",
    }
  })



const useStyles = makeStyles({
    greyText : {
        color: "grey",
        fontSize: 12,
    
    },
    greyBoldText : {
        color: "grey",
        fontSize: 18,
    },
    blackText : {
        color: "black",
        fontSize: 18,
        fontWeight: 'bold',
    },
    blackArray : {
        color: "black",
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Montserrat',
    },

});


const Img = styled('img')({
    margin: 'left',
    width: 20,
});




const Body = () => {
    const classes = useStyles();
    return (
    <div>
       <div style={{ padding: 20 }}></div>
        <Container justifyContent="space-around">
            <Grid container spacing={6} justifyContent="flex-start">
                    <Grid item  >
                        <Typography className={classes.blackText}>TRANSACTIONS</Typography>
                    </Grid>
                </Grid>
        </Container>

        <Container>
            <Grid container justifyContent="flex-start" spacing={10}>

                <Grid item justifyContent="flex-start">
                    <Grid container justifyContent="flex-start" >
                        <Typography className={classes.blackText}>8,5732<span>&nbsp;&nbsp;</span></Typography>
                        <Typography className={classes.greyBoldText}>TEST</Typography>
                    </Grid>
                    <Typography sx={{ mb: 1.5 }} className={classes.greyText} color="text.secondary">
                        TOTAL CLAIMED
                    </Typography>
                </Grid>
                <Grid item justifyContent="flex-start">
                    <Grid container justifyContent="flex-start" >
                        <Typography className={classes.blackText}>24<span>&nbsp;&nbsp;</span></Typography>
                        <Typography className={classes.greyBoldText}>USD</Typography>
                    </Grid>
                    <Typography sx={{ mb: 1.5 }} className={classes.greyText} color="text.secondary">
                        TOTAL CLAIMED
                    </Typography>
                </Grid>
            </Grid>
        </Container>

        <div style={{ padding: 20 }}></div>

        <Container>
            <Paper theme={themePaper} sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1}}>
                <Grid container spacing={3} direction="row">
                    <Grid item xs="3"  alignItems="center">
                        <Typography className={classes.blackArray}><span>&nbsp;&nbsp;</span>Asset</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Typography className={classes.blackArray}>Amount</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Typography className={classes.blackArray}>Total Value</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Typography className={classes.blackArray}>Time</Typography>
                    </Grid>
                    <Grid item xs="3"  alignItems="flex-start" style={{textAlign: "center" }} >
                        <Typography className={classes.blackArray}>PolygonScan</Typography>
                    </Grid>
                </Grid>
            </Paper>
            
            <Paper theme={themePaper} sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1}}>
                <Grid container spacing={3} direction="row" alignItems="center" >
                    <Grid item item xs="3"  justifyContent="flex-start">
                        <Grid container justifyContent="flex-start" >
                            <span>&nbsp;&nbsp;</span>
                            <Img alt="complex" src="img/logo_blue.jpg" />
                            <Typography className={classes.blackArray}><span>&nbsp;&nbsp;</span>TEST TOKEN</Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs="2"  alignItems="center" style={{ background: '#F1F0EC', textAlign: "center" }}>
                        <Typography className={classes.blackArray}>2324</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Typography className={classes.blackArray}>$74.03k</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{ background: '#F1F0EC', textAlign: "center" }}>
                        <Typography className={classes.blackArray}>1 minute ago</Typography>
                    </Grid>
                    <Grid item xs="3"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Img alt="complex" src="img/polygonScan.jpg" />
                    </Grid>
                </Grid>
            </Paper>

            <Paper theme={themePaper} sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1}}>
                <Grid container spacing={3} direction="row" alignItems="center" >
                    <Grid item item xs="3"  justifyContent="flex-start">
                        <Grid container justifyContent="flex-start" >
                            <span>&nbsp;&nbsp;</span>
                            <Img alt="complex" src="img/logo_blue.jpg" />
                            <Typography className={classes.blackArray}><span>&nbsp;&nbsp;</span>TEST TOKEN</Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs="2"  alignItems="center" style={{ background: '#F1F0EC', textAlign: "center" }}>
                        <Typography className={classes.blackArray}>2324</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Typography className={classes.blackArray}>$74.03k</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{ background: '#F1F0EC', textAlign: "center" }}>
                        <Typography className={classes.blackArray}>1 minute ago</Typography>
                    </Grid>
                    <Grid item xs="3"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Img alt="complex" src="img/polygonScan.jpg" />
                    </Grid>
                </Grid>
            </Paper>

            <Paper theme={themePaper} sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1}}>
                <Grid container spacing={3} direction="row" alignItems="center" >
                    <Grid item item xs="3"  justifyContent="flex-start">
                        <Grid container justifyContent="flex-start" >
                            <span>&nbsp;&nbsp;</span>
                            <Img alt="complex" src="img/logo_blue.jpg" />
                            <Typography className={classes.blackArray}><span>&nbsp;&nbsp;</span>TEST TOKEN</Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs="2"  alignItems="center" style={{ background: '#F1F0EC', textAlign: "center" }}>
                        <Typography className={classes.blackArray}>2324</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Typography className={classes.blackArray}>$74.03k</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{ background: '#F1F0EC', textAlign: "center" }}>
                        <Typography className={classes.blackArray}>1 minute ago</Typography>
                    </Grid>
                    <Grid item xs="3"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Img alt="complex" src="img/polygonScan.jpg" />
                    </Grid>
                </Grid>
            </Paper>

            <Paper theme={themePaper} sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1}}>
                <Grid container spacing={3} direction="row" alignItems="center" >
                    <Grid item item xs="3"  justifyContent="flex-start">
                        <Grid container justifyContent="flex-start" >
                            <span>&nbsp;&nbsp;</span>
                            <Img alt="complex" src="img/logo_blue.jpg" />
                            <Typography className={classes.blackArray}><span>&nbsp;&nbsp;</span>TEST TOKEN</Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs="2"  alignItems="center" style={{ background: '#F1F0EC', textAlign: "center" }}>
                        <Typography className={classes.blackArray}>2324</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Typography className={classes.blackArray}>$74.03k</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{ background: '#F1F0EC', textAlign: "center" }}>
                        <Typography className={classes.blackArray}>1 minute ago</Typography>
                    </Grid>
                    <Grid item xs="3"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Img alt="complex" src="img/polygonScan.jpg" />
                    </Grid>
                </Grid>
            </Paper>

            <Paper theme={themePaper} sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1}}>
                <Grid container spacing={3} direction="row" alignItems="center" >
                    <Grid item item xs="3"  justifyContent="flex-start">
                        <Grid container justifyContent="flex-start" >
                            <span>&nbsp;&nbsp;</span>
                            <Img alt="complex" src="img/logo_blue.jpg" />
                            <Typography className={classes.blackArray}><span>&nbsp;&nbsp;</span>TEST TOKEN</Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs="2"  alignItems="center" style={{ background: '#F1F0EC', textAlign: "center" }}>
                        <Typography className={classes.blackArray}>2324</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Typography className={classes.blackArray}>$74.03k</Typography>
                    </Grid>
                    <Grid item xs="2"  alignItems="flex-start" style={{ background: '#F1F0EC', textAlign: "center" }}>
                        <Typography className={classes.blackArray}>1 minute ago</Typography>
                    </Grid>
                    <Grid item xs="3"  alignItems="flex-start" style={{textAlign: "center" }}>
                        <Img alt="complex" src="img/polygonScan.jpg" />
                    </Grid>
                </Grid>
            </Paper>

        </Container>    
    </div>
    );
    
};

export default Body;