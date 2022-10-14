// https://metamask.github.io/api-playground/api-documentation/#wallet_addEthereumChain
/**
 * 是否安装小狐狸
 * */
export function isMetaMask() {
  return typeof window.ethereum !== 'undefined';
}


/**
 * 获取ChainId
 * */
export function getChainId() {
  return new Promise(async (resolve, reject) => {
    const { ethereum } = window
    try {
      const chainId = await ethereum.request({
        method: 'eth_chainId'
      })
      resolve(chainId)
    } catch(e) {
      reject(e.message)
    }
  })
}

/**
 * 切换到以太坊网络
 * */
export function switchToEthereum() {
  return new Promise(async (resolve, reject) => {
    try {
      const { ethereum } = window
      const res = await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: '0x1'
          }
        ]
      })
      resolve(res)
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * 切换到指定的EVM网络
 * */
export function switchToEvmNetwork(chainId) {
  return new Promise(async (resolve, reject) => {
    try {
      const { ethereum } = window
      const res = await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId
          }
        ]
      })
      resolve(res)
    } catch (e) {
      reject(e)
    }
  })
}
