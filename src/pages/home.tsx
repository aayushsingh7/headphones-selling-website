import HeroSection from '@/components/ui/HeroSection'
import { FC } from 'react'

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {

  return (
    <div className="Home-section" id='Home'>
    <HeroSection/>
 </div> 
  )
}

export default Home