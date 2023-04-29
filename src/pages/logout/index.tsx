import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

interface LogoutProps {}

const Logout: FC<LogoutProps> = ({}) => {
 const router = useRouter()

    useEffect(()=> {
        const logoutUser = async()=> {
            try {
           Cookies.remove('jwt')
                 const logout = await fetch('http://localhost:3000/api/logout',{method:"GET",credentials:"include"})
                 let response = await logout.json()
                 if(logout.status === 200){
            console.log(response)
                 window.alert("Logout Successfully")
                 router.push('/login')
                 }else{
                    console.log(response)
                    router.back()
                    window.alert("Something went wrong while logging out")
                 }
            } catch (err) {console.log(err)}
        }
        logoutUser()
    },[])


  return (
    <div className="Logout">
     <p>Logging Out...</p>
    </div>
  )
}

export async function getServerSideProps(context:any) {
  context.res.setHeader(
      "Set-Cookie", [
      `jwt=deleted; Max-Age=0; path=/`,
      `refresh=deleted; Max-Age=0; path=/`]
      );
  return { props: { } }
}

export default Logout