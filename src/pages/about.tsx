import AboutBox from '@/components/ui/AboutBox'
import { FC } from 'react'

interface AboutProps {
  
}

const About: FC<AboutProps> = ({}) => {
  return (
    <div className="About-section" id="About">
      <h2 className='heading-text'>About Us</h2>
   <AboutBox/>
    </div>
  )
}

export default About