import Button from '@/components/ui/Button'
import { FC, useState } from 'react'
import styles from '../../styles/Register.module.css'
import Link from 'next/link'
import { fetchUser } from '@/slice/userSlice'
import { useRouter } from 'next/router'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IndexProps {
}



const Index: FC<IndexProps> = ({}) => {
    const [loading , setLoading] = useState(false)
    const router = useRouter()
 const [userInput , setUserInput] = useState({
    name:"",
    email:"",
    password:"",
 })

 const registerUser = async(e:any)=> {
    try {
        e.preventDefault()
        console.log(userInput)
            setLoading(true)
            let register = await fetch('http://localhost:3000/api/register', { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify(userInput) })
            let response = await register.json()
            console.log(response)
            if (register.status === 200) {
                setLoading(false)
                router.push('/verifying')
                toast("User Registered Successfully", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
              
            } else {
                setLoading(false)
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
            }
    } catch (err) {
        console.log(err)
    }
 }

    const handleInput= (e:any)=> {
        setUserInput((old)=> {
            return {...old , [e.target.name]:e.target.value}
        })
    }


  return (
    <div className={styles.Container}>
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
            {/* <AiOutlineArrowLeft className='arrow_left'/> */}
    <form onSubmit={registerUser} className={styles.Box}>
        <h2>Create new account</h2>
        <div className={styles.Inputs_Container}>
            <input type="text" placeholder='Your Name' required onChange={handleInput} name='name' autoComplete='off' />
            <input type="email" placeholder="Your Email" required onChange={handleInput} name='email' autoComplete='off' />
            <input type="password" placeholder="Your Password" required onChange={handleInput} name='password' autoComplete='off' />
            <Button  txt={"Register"} background='var( --head-text)' color='white' marginTop='70px' isLoading={loading} loadingTxt={"Registering..."}/>
        </div>
    </form>
    <p className={styles.Register_Option}>{"Already have an account?"} <Link href={'/login'}><span>Login</span></Link></p>
</div>
  )
}

export default Index