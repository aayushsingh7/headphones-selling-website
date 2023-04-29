import { FC } from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiOutlineTwitter , AiOutlineCopyrightCircle } from 'react-icons/ai'
import {RiInstagramFill} from  'react-icons/ri'
import {GrFacebookOption} from 'react-icons/gr'
import {FaSnapchatGhost} from 'react-icons/fa'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="Footer">
        <h2>Notion PVT LTD.</h2>
        <p>At Notion.io, we believe that listening to music should be a deeply personal and immersive experience. Thats why we dedicated to providing our customers with the best possible selection of high-quality headphones, designed to meet a wide range of listening preferences and styles. From noise-cancelling headphones for a distraction-free listening experience, to wireless headphones for maximum freedom and mobility, we got you covered. With our expertly curated collection of headphones from top brands, you can be sure that your getting the best of the best</p>

       <div className="follow-us-div">
        <p>Follow us :-</p>
       <div className='platform-icons'>
        <AiOutlineTwitter className='icons-two-navigate' style={{marginRight:"15px"}}/>
        <GrFacebookOption className='icons-two-navigate' style={{marginRight:"15px"}}/>
        <RiInstagramFill className='icons-two-navigate' style={{marginRight:"15px"}}/>
        <FaSnapchatGhost className='icons-two-navigate' />
        </div>
       <p className='copy-right'><AiOutlineCopyrightCircle style={{fontSize:"20px",marginRight:"10px"}}/> 2023 Notion PVT LTD. All rights reserved</p>
       </div>
    </div>
  )
}

export default Footer