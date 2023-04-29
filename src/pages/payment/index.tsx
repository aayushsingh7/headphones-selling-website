import { FC } from 'react'
import Link from 'next/link'

interface PaymentProps {}

const Payment: FC<PaymentProps> = ({}) => {
  return <div className="Payment_page">
     <h2>Sorry!</h2>
     <p>Payment feature is not currently available as the creator of this App is <span>below 18</span> and dont have a <span>Bank account</span></p>

    <Link href="/" style={{fontSize:"1.5rem",color:"#0080ff",marginTop:"40px"}}>Back to Home Page</Link>
  </div>
}

export default Payment