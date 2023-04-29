import { FC, useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { fetchUser } from "@/slice/userSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

interface indexProps {}

const Verifying: FC<indexProps> = ({}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [verify , setVerify] = useState("Verifying")

  useEffect(() => {
    dispatch(fetchUser());
    setTimeout(()=> {
      router.push('/#Home')
    },500)
  }, []);



  // Loading effect :- 
  
  // let interval = setInterval(() => {
  //   if (verify === "Verifying") {
  //    setVerify( "Verifying.")
  //   clearInterval(interval)
  //   } else if (verify === "Verifying.") {
  //    setVerify( "Verifying..")
  //   clearInterval(interval)
  //   } else if (verify === "Verifying..") {
  //    setVerify( "Verifying...") 
  //   clearInterval(interval)
  //   } else if (verify === "Verifying...") {
  //      setVerify("Verifying....")
  //   clearInterval(interval)
  //   } else if (verify === "Verifying....") {
  //    setVerify( "Verifying")
  //   clearInterval(interval)
  //   }
  // }, 500);

  // console.log(verify)

  return (
    <div className="Verifying">
      <img
        src="/notion.webp"
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
        alt="Loading..."
      />
    </div>
  );
};

export default Verifying;
