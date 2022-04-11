import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import WalletConnect from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK,
    options: {
      appName: 'Web 3 Modal Demo',
      infuraId: process.env.INFURA_KEY,
    },
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: process.env.INFURA_KEY,
    },
  },
}
