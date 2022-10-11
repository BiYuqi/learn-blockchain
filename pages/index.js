import Dashboard from "../components/dashboard";

const FeatureListRoute = [
  {
    desc: 'EthersJs常用方法',
    link: '/ethers-universal',
    tags: [
      'ethers.js',
      'metamask',
      'swap',
      'transfer'
    ]
  }
]

export default function Home() {
  return (
    <div className="flex flex-row">
      {
        FeatureListRoute.map((item) => {
          return (
            <div className="basis-1/6 cursor-pointer transition hover:-translate-y-1">
              <Dashboard { ...item } />
            </div>
          )
        })
      }
    </div>
  )
}
