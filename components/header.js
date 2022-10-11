import {Button, Snackbar, Alert} from '@mui/material'
import { ethers } from 'ethers'
import {useEffect, useState} from "react";
import { shortAddress } from "../utils/format";
import {removeStore, setStore} from "../utils/localStore";
import {useAddressStorage} from "../hooks/useAddressStorage";

export default function Header() {
  const [provider, setProvider] = useState(null)
  const [address, setAddress] = useState(null)
  const [open, setOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const initProvider = () => {
    if (!window.ethereum) {
      return
    }
    const pd = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(pd)
    if (pd.provider.selectedAddress) {
      setAddress(pd.provider.selectedAddress)
    }
  }
  const storeAddress = useAddressStorage()

  useEffect(() => {
    (async () => {
      if (storeAddress) {
        await initProvider()
      }
    })()
  }, [storeAddress])

  const connect = async () => {
    try {
      if (!window.ethereum) {
        setErrorMsg('Count not find the metamask')
        return
      }
      const pd = new ethers.providers.Web3Provider(window.ethereum)
      console.log(pd.provider.selectedAddress)
      const hasAddress = pd.provider.selectedAddress
      if (!hasAddress) {
        const accounts = await pd.send("eth_requestAccounts", []);
        setAddress(accounts[0])
        setStore('address', accounts[0])
      } else {
        setStore('address', hasAddress)
        setAddress(hasAddress)
      }
    } catch (e) {
      setOpen(true)
      setErrorMsg(e.message)
    }
  }

  const disconnect = () => {
    removeStore('address')
    setAddress(null)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="header-wrap flex flex-row justify-between p-6 border-b shadow-sm border-gray-300">
      <div className="header__left basis-3/12 text-3xl font-semibold">
        Learn BlockChain
      </div>
      <div className="header__right basis-2/12 text-right	">
        { !address && <Button variant="contained" onClick={connect}>Connect Wallet</Button> }
        { address && <Button variant="contained" onClick={disconnect} >Disconnect</Button> }
        { address && <Button variant="contained" >{shortAddress(address)}</Button> }
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        autoHideDuration={2000}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMsg}
        </Alert>
      </Snackbar>
    </div>
  )
}
