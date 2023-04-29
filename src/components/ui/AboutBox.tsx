import Image from 'next/image'
import { FC } from 'react'

interface AboutBoxProps {
  
}

const AboutBox: FC<AboutBoxProps> = ({}) => {
  return (
    <div className="About-box">
    <Image src={'/about-main.png'} alt='about-image' width={1000} height={1000}/>
    <div className="about-discription">
 <h2>About us:-</h2>
<p style={{padding:"10px",marginTop:"20px"}}>At Notion.io, we believe that listening to music should be a deeply personal and immersive experience. Thats why we dedicated to providing our customers with the best possible selection of high-quality headphones, designed to meet a wide range of listening preferences and styles. From noise-cancelling headphones for a distraction-free listening experience, to wireless headphones for maximum freedom and mobility, we got you covered. With our expertly curated collection of headphones from top brands, you can be sure that your getting the best of the best</p>

<p style={{padding:"10px",marginTop:"20px"}}>Our passion for headphones goes beyond just selling them - were true audiophiles at heart. We know that every music lover has their own unique tastes and preferences, and that finding the right pair of headphones can make all the difference. Thats why we made it our mission to provide a platform for headphone enthusiasts to discover and explore new products, learn about the latest trends in audio technology, and connect with others who share their love for music</p>

<p style={{padding:"10px",marginTop:"20px"}}>We is more than just a headphone retailer - we a community of music lovers and tech enthusiasts who are passionate about discovering the latest and greatest in audio technology. Whether you a professional musician looking for the perfect set of studio headphones, or a casual listener searching for a comfortable and stylish pair to use on the go, we got everything you need to take your listening experience to the next level. Join us today and discover a world of sound like you never heard it before</p>

    </div>
    </div>
  )
}

export default AboutBox