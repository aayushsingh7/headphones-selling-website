import Button from '@/components/ui/Button'
import { RootState } from '@/store/store'
import { FC , useState } from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactProps {}

// interface Contact {
//     name:string,
//     email:string,
//     body:string
// }

const Contact: FC<ContactProps> = ({}) => {
  const [loading , setLoading] = useState(false)
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
    setLoading(true)
    try{
      const sendFeekback = await fetch('https://tiny-moxie-58820c.netlify.app/api/contactAdmin',{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(userInput)})
      let response = await sendFeekback.json()
      toast(`${response.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false)
      userInput.body = ""
      userInput.email = ""
      userInput.name = ""
    } catch(err){
      setLoading(false)
    console.log(err)
    }
  }


  return (
    <div className="Contact-Section" id='Contact'>
       <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="custom-toast-class"
      />
        <form action="" method='POST' onSubmit={submitFeedback}> 
        <h2>Contact Us</h2>
        <div className="contact-inputs__fill">
         <input type="text" placeholder='Your name' required name='name'  onChange={handleUserInput} value={userInput.name}/>
         <input type="email" placeholder='Your email' required  autoComplete='off' name='email' onChange={handleUserInput}
          value={userInput.email} />
       <textarea name="body"  required placeholder='Type a message' onChange={handleUserInput} value={userInput.body}></textarea>
         <Button type='submit' background='var(--bg-background-highlight)' color='black' txt='Submit' marginTop='20px' loadingTxt='Sending email...' isLoading={loading}/>
        </div>
        </form>
    </div>
  )
}

export default Contact