import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import {Button, Grid, Paper, makeStyles, ThemeProvider, createTheme, styled, Typography, Container, CssBaseline, AppBar } from '@material-ui/core';
import Interactions from './Interactions';





const WalletConnect = () => {
    
    const contractAbi = [{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"periodicity","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cliffTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountLocked","type":"uint256"}],"name":"TokenLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockId","type":"uint256"}],"name":"TokenReleased","type":"event"},{"inputs":[],"name":"ASelfClaimToMyWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"}],"name":"BAdminReleaseAllVestedTokensToSingleBeneficiary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"beneficiaries","type":"address[]"}],"name":"CAdminReleaseAllVestedTokensToSingleBeneficiary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"periodicity","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"cliffTime","type":"uint256"},{"internalType":"uint256","name":"permilleReleasedAtStart","type":"uint256"}],"name":"DAdminLockTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"beneficiaries","type":"address[]"},{"internalType":"uint256[]","name":"durations","type":"uint256[]"},{"internalType":"uint256[]","name":"peridicities","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"cliffTimes","type":"uint256[]"},{"internalType":"uint256[]","name":"permilleReleasedAtStarts","type":"uint256[]"}],"name":"EAdminBatchLockTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"FAdminRenounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"GAdminTransferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockId","type":"uint256"}],"name":"getAvailableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"}],"name":"getLockIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"}],"name":"getReleasableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockInfos","outputs":[{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"periodicity","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"cliffTime","type":"uint256"},{"internalType":"uint256","name":"released","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}];

    let contractAddress = '0x92B384483147937713a8ad97145A327BdAc0aE9A';

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);

	const [balance, setBalance] = useState(null);

    const useStyles = makeStyles(() => ({
        typographyStyles: {
        flex: 1
        },
        buttonConnect : {
            color: "black",
            fontSize: 14,
            fontWeight: 'bold',
        },
        greyText: {
            color: "grey",
            fontSize: 12,
        },
        greyBoldText: {
            color: "grey",
            fontSize: 14,
            fontWeight: 'bold',
        },
        blackText: {
            color: "black",
            fontSize: 14,
            fontWeight: 'bold',
        }
    }));

    const classes = useStyles();

    const themePaper = createTheme({
        paper: {
        width: "100%",
        Height: "500vh",
        }
    });

    const themeBackground = createTheme({
        palette: {
        background: {
            default: "#E5E5E5",
        }
        }
    });

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 40,

    });


	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}


	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

    const updateBalance = async () => {
		let balanceBigN = await contract.getReleasableAmount(defaultAccount);
		let amountDecimals = ethers.BigNumber.from(balanceBigN).toString();

        amountDecimals = amountDecimals / Math.pow(10, 18);
		setBalance(amountDecimals);	

	}


	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);


	const updateEthers = async () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);

		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);

		let tempContract = new ethers.Contract(contractAddress, contractAbi, tempSigner);
		setContract(tempContract);	

	}

    useEffect(() => {
		if (contract != null) {
			updateBalance();
		}
	}, [contract]);



	return (

    <>
        <ThemeProvider theme={themeBackground}>
            <Container sx={{ bgcolor: "#E5E5E5" }}>
                <CssBaseline theme={themeBackground} >
                    <div className="App">
                        <AppBar  color="transparent" style={{ background: 'white', padding: 2 }}>
                            <Grid container justify={"space-between"} position="column" >
                                <Grid item xs="1">
                                    <Img alt="complex" src="img/logo_blue_header.jpg" />
                                </Grid>
                                <Grid item xs="2" justifyContent="flex-end">
                                    <h3></h3>
                                    <Button
                                        style={{ flex: 1, marginBottom: 10 }}
                                        variant="outlined"
                                        className={classes.buttonConnect}
                                        onClick={connectWalletHandler}
                                        >
                                        {connButtonText}
                                    </Button>
                                    {errorMessage}
                                </Grid>
                            </Grid>
                        </AppBar>
                    </div>
                </CssBaseline>
            </Container>
        </ThemeProvider>

        <div style={{ padding: 30 }}></div>

        <Container>
            <Grid container spacing={3} justifyContent="flex-start" >
                <Grid item  >
                    <h1>CLAIMING TOKENS</h1>

                </Grid>
            </Grid>
            <Grid container spacing={3} justifyContent="flex-start">
                <Grid item >
                    <h3>TOKENS AVAILABLE FOR CLAIMING</h3>
                </Grid>
            </Grid>

            <div style={{ padding: 20 }}></div>

            <Paper theme={themePaper} sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                <Grid container spacing={6} direction='row' justifyContent="flex-start" display='inline-block'>
                    <Grid item xs="2">
                        <Img alt="complex" src="img/logo_red.jpg" />
                    </Grid>
                    <Grid item xs="1" sm >                        
                        <Typography className={classes.blackText}>
                            <div>CONTRACT</div>
                        </Typography>
                        <Grid item xs="1">
                            <Typography variant="title" className={classes.greyText} color="inherit" noWrap>
                                {contractAddress}
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs="5" sm>
                            <Typography sx={{ mb: 1.5 }} className={classes.greyText} color="text.secondary">
                                CLAIMABLE
                            </Typography>
                        <div style={{ display: "center" }}>
                            <Typography variant="title" className={classes.blackText} color="inherit" noWrap>
                                {balance}
                            </Typography>
                            <Typography variant="subheading" className={classes.greyBoldText}  color="inherit" noWrap>
                                TEST
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs="2"  >
                    <Interactions contract={contract} connButtonText={connButtonText} balance={balance}/>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    </>
	)
}

export default WalletConnect;