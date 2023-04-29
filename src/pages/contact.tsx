import Button from '@/components/ui/Button'
import { RootState } from '@/store/store'
import { FC , useState } from 'react'
import { useSelector } from 'react-redux'

interface ContactProps {}

// interface Contact {
//     name:string,
//     email:string,
//     body:string
// }

const Contact: FC<ContactProps> = ({}) => {
  const [userInput , setUserInput] = useState({
    name:"",
    email:"",
    body:""
  })

const handleUserInput = (e:any)=> {
  setUserInput((old)=> {
    return {...old,[e.target.name]:e.target.value}
  })
}

  const submitFeedback = async(e:any)=> {
    e.preventDefault()
    console.log("SENDING EMAIL....")
    console.log({user:userInput})
    try{
      const sendFeekback = await fetch('http://localhost:3000/api/contactAdmin',{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(userInput)})
      let response = await sendFeekback.json()
      if(sendFeekback.status === 200){
        window.alert("Email Successfully Sent!!")
        console.log(response)
      }else{
        window.alert("Something went wrong while sending the email")
      }
    } catch(err){
    console.log(err)
    }
  }


  return (
    <div className="Contact-Section" id='Contact'>
        <form action="" method='POST' onSubmit={submitFeedback}> 
        <h2>Contact Us</h2>
        <div className="contact-inputs__fill">
         <input type="text" placeholder='Your name' required name='name'  onChange={handleUserInput}/>
         <input type="email" placeholder='Your email' required  autoComplete='off' name='email' onChange={handleUserInput} />
       <textarea name="body"  required placeholder='Type a message' onChange={handleUserInput}></textarea>
         <Button type='submit' background='var(--bg-background-highlight)' color='black' txt='Submit' marginTop='20px'/>
        </div>
        </form>
    </div>
  )
}

export default Contact