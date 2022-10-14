import { Button, Card } from "@mui/material";
import {useEffect, useState} from "react";
import { isMetaMask } from "../utils/metamask";

function CardBox({ children }) {
  return (
    <div className="cursor-pointer">
      <Card sx={{ minHeight: 175 }} variant="outlined" className="p-2">
        { children }
      </Card>
    </div>
  )
}

function ButtonWrap(props) {
  return (
    <Button className="mb-2" style={{textTransform: 'none'}} variant="contained" onClick={props.onClick}>{ props.children }</Button>
  )
}

export default function Metamask() {
  const handleCheckMetamask = () => {
    alert(isMetaMask())
  }
  const isConnectMetamask = () => {
    if(!isMetaMask()) {
      alert('未安装MetaMask')
      return
    }
    alert(window.ethereum.isConnected())
  }

  const switchNetwork = () => {

  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:grid-cols-6" >
      <CardBox>
        <ButtonWrap onClick={handleCheckMetamask}>
          检测是否安装: MetaMask
        </ButtonWrap>
        <ButtonWrap onClick={isConnectMetamask}>
          是否连接MetaMask
        </ButtonWrap>
      </CardBox>
    </div>
  )
}
