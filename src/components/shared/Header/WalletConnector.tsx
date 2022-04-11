import React, { useEffect, useState, useRef } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { providerOptions } from '@/lib/wallet'
function WalletConnector({ setAccount }) {
  const web3Modal = useRef<any>()
  const [provider, setProvider] = useState<any>()
  const [library, setLibrary] = useState<any>()
  const [network, setNetwork] = useState<any>()
  useEffect(() => {
    web3Modal.current = new Web3Modal({
      providerOptions, // required
    })
  }, [])
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.current.connect()
      const library = new ethers.providers.Web3Provider(provider)
      const accounts = await library.listAccounts()
      const network = await library.getNetwork()
      setProvider(provider)
      setLibrary(library)
      if (accounts) setAccount(accounts[0])
      setNetwork(network)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <button onClick={connectWallet} className="h-12 px-5 border border-primary">
      Connect Wallet
    </button>
  )
}

export default WalletConnector
