import React, { Component, useState } from "react";
import WalletConnect from "./WalletConnect";
import Body from "./Body";


class App extends Component {


  render() {

    return (
      <>
        <WalletConnect />
        <Body />
      </>
    );
  }
}

export default App;
