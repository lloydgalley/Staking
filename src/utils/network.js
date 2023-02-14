export const networkIds = {
  ALL: 651940
}

const networks = {
  [networkIds.ALL]: {
    chainId: '0x9F2A4',
    chainName: 'ALL Network',
    nativeCurrency: {
      name: 'Alltra Coin',
      symbol: 'ALL',
      decimals: 18
    },
    rpc: 'https://mainnet-rpc.alltra.global',
    explorer: 'https://alltra.global'
  }
}

export const getNetwork = (networkId) => networks[networkId]
