import { ReactNode } from 'react'
import { IndexPage } from './ui/pages'
import { Footer } from './ui/components/footer'

export const App = (): ReactNode => {
  // const [count, setCount] = useState(0)
  return (
    <>
      <IndexPage />
      <Footer />
    </>
  )
}
