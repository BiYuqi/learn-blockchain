import {Button} from '@mui/material'

export default function Header() {
  return (
    <div className="header-wrap flex flex-row justify-between p-6 border-b shadow-sm border-gray-300">
      <div className="header__left basis-3/12 text-3xl font-semibold">
        Learn BlockChain
      </div>
      <div className="header__right basis-2/12 text-right	">
        <Button variant="contained">Connect Wallet</Button>
      </div>
    </div>
  )
}
