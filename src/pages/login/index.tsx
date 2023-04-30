import Link from "next/link";
import styles from "../../styles/Login.module.css";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const loginUser = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      let login = await fetch("https://tiny-moxie-58820c.netlify.app/api/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput),
      });
      let response = await login.json();
      if (login.status === 200) {
        setLoading(false);
        // window.alert(`${response.message}`)
        router.push("/verifying");
        toast("Login Successfully", {
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
        setLoading(false);
        // window.alert(`${response.message}`)
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
      console.log(err);
    }
  };

  const handleInput = async (e: any) => {
    setUserInput((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

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
      <form className={styles.Box} onSubmit={loginUser}>
        <h2>Login to continue</h2>
        <div className={styles.Inputs_Container}>
          <input
            type="email"
            placeholder="Your Email"
            required
            autoComplete="off"
            name="email"
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Your Password"
            required
            autoComplete="off"
            name="password"
            onChange={handleInput}
          />
          <Button
            txt={"Login"}
            background="var( --head-text)"
            color="white"
            marginTop="70px"
            isLoading={loading}
            loadingTxt={"Checking user..."}
          />
        </div>
      </form>
      <p className={styles.Login_Option}>
        {"Doesn't have an account?"}{" "}
        <Link href={"/register"}>
          <span>Register</span>
        </Link>
      </p>
    </div>
  );
}
