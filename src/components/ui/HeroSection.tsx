import Image from 'next/image'
import { FC } from 'react'

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <div className="Hero-Section">
   <div className="hero-section-image">
   {/* <Image src={"/hero-section-main.png"} alt='Hero-Image' width={1000} height={1000} /> */}
   </div>
     <div className="website-hero-section-heading-text">
       <h2>Elevate Your</h2>
       <h1>Listening <span>Experience</span></h1>
     <h2>with Our Premium Headphones</h2>
     </div>
    </div>
  )
}

export default HeroSection