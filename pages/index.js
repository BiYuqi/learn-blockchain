import Dashboard from "../components/dashboard";

const FeatureListRoute = [
  {
    desc: 'EthersJs常用方法',
    link: '/ethers-universal',
    tags: [
      'ethers.js',
      'call contract',
      'abi',
      'swap',
      'transfer'
    ]
  },
  {
    desc: 'Metamask常用操作',
    link: '/metamask',
    tags: [
      'metamask',
      'switch network',
      'call transaction '
    ]
  },
  {
    desc: 'wagmi',
    link: '/wagmi',
    tags: [
      'wagmi',
      'React Hooks for Ethereum'
    ]
  }
]

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:grid-cols-6">
      {
        FeatureListRoute.map((item) => {
          return (
            <div key={item.link} className="cursor-pointer transition hover:-translate-y-1">
              <Dashboard { ...item } />
            </div>
          )
        })
      }
    </div>
  )
}
