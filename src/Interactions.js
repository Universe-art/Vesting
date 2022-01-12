import React, { useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, ThemeProvider, createTheme, styled, DialogContent, DialogTitle, CircularProgress, Link, Container } from '@material-ui/core';
import DialogComponent from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';



const Interactions = (props) => {

    const [txId, setTxId] = useState('');
    const [urlTx, seturlTx] = useState('');
    const [open, setOpen] = React.useState(false);

    let scanUrl = "https://testnet.bscscan.com/tx/";

    let tempTxId;
    let hashId;

    const useStyles = makeStyles(() => ({
        typographyStyles: {
        flex: 1
        },
        buttonClaim : {
        backgroundColor: '#F1FB56',
        fontSize: 14,
        fontWeight: 'bold',
        buttonConnect : {
            color: "black",
            fontSize: 14,
            fontWeight: 'bold',
        },
        blackText: {
            color: "black",
            fontSize: 10,
            fontWeight: 'bold',
        },
        progressEllipse: {
            thickness: 5,
            color: '#F1FB56',
        },
        dialog: { minWidth: "500px" },
    }}));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const classes = useStyles();

    const claimTokens = async () => {

        if (props.connButtonText == 'Connect Wallet') {
            alert('Please Connnect Wallet');
        };

        if ((props.connButtonText == 'Wallet Connected') && (props.balance > 0)) {
            tempTxId = await props.contract.ASelfClaimToMyWallet()
            setTxId(tempTxId.hash);
            seturlTx("https://testnet.bscscan.com/tx/" + tempTxId.hash);
            handleClickOpen();
        };
	};

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const onClickUrl = (url) => {
        return () => openInNewTab(url)
      }
    

	return (
        <>
            <Button
                variant="contained"
                className={classes.buttonClaim}
                onClick={claimTokens}>
                CLAIM TOKENS
            </Button>
            <DialogComponent 
                height= '800px'
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <br></br><br></br><br></br><br></br><br></br>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <CircularProgress size={100} style={{color: "yellow"}}>  
                    </CircularProgress>
                </div>
                <br></br><br></br>
                <DialogTitle id="alert-dialog-title" style={{display: 'flex', justifyContent: 'center'}}>
                    TRANSACTION IN PROGRESS
                </DialogTitle>
                <br></br><br></br>
                <DialogContent >
                    <Typography className={classes.blackText} style={{display: 'flex', justifyContent: 'center'}}>
                        <div>Transaction is proceeding on Polygon Network.</div>
                    </Typography>
                    <Typography className={classes.blackText} style={{display: 'flex', justifyContent: 'center'}}>
                        
                        <div>This can take a moment, please be patient...</div>
                    </Typography>
                        <br></br><br></br>
                    <Typography className={classes.blackText} style={{display: 'flex', justifyContent: 'center'}}>
                        Hash : 
                    </Typography>
                    <Link href={urlTx} underline="hover"   rel="noopener" target="_blank" style={{color: "brown"}}>
                        {txId}
                    </Link>
                    <br></br><br></br>
                    <Container style={{ display: "flex", justifyContent: "center"}}>
                        <Button variant="outlined" onClick={onClickUrl(urlTx)} style={{ display: "flex", justifyContent: "center"}}>
                            CHECK ON POLYGON SCAN
                        </Button>
                    </Container>
                </DialogContent>
            </DialogComponent>
        </>
		)
}

export default Interactions;