import Navbar from '@/components/ui/Navbar'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Providers } from '@/provider'

export default function App({ Component, pageProps }: AppProps) { 

  const router = useRouter()

  useEffect(()=> {
     router.push('/verifying')
  },[])

  return (
  <Providers>
     <div className="App">
      <Navbar/>
    <div className="App-Content-Container">
      <Component {...pageProps} />
    </div>
    </div>
  </Providers>
  )
}
