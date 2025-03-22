'use client'
import { ReactNode } from 'react'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

interface Props {
  children?: ReactNode
}

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''
const endpoint = process.env.NEXT_PUBLIC_RPC_ENDPOINT_URL || 'https://rpc.waterfall.network'

const sepolia = {
  chainId: 11155111,
  name: 'sepolia',
  chainName: 'sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: endpoint,
}

const waterfall = {
  chainId: 181,
  name: 'Waterfall',
  chainName: 'Waterfall',
  currency: 'WATER',
  explorerUrl: 'https://explorer.waterfall.network',
  rpcUrl: endpoint,
}

// const opSepolia = {
//   chainId: 11155420,
//   name: 'OP Sepolia',
//   chainName: 'OP Sepolia',
//   currency: 'ETH',
//   explorerUrl: 'https://sepolia-optimism.etherscan.io/',
//   rpcUrl: 'https://sepolia.optimism.io',
// }

const metadata = {
  name: 'Aqua DAO',
  description: 'DAOs for aqua people',
  url: 'https://aquadex.co/dao',
  icons: ['./public/favicon.ico'],
}

const ethersConfig = defaultConfig({
  metadata,
  enableEmail: true,
  defaultChainId: 181,
})

createWeb3Modal({
  ethersConfig,
  chains: [waterfall],
  projectId,
  // enableAnalytics: true,
  // enableOnramp: true,
})

export function Web3Modal({ children }: Props) {
  return <div>{children}</div>
}
