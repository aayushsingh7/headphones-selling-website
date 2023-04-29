import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { FC } from "react";
import { BsPersonCircle } from "react-icons/bs";
import NavbarMoreOptions from "../NavbarMoreOptions";
import Button from "./Button";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  // const prevScrollPosRef = useRef(0);
  const [showNavbar , setShowNavbar] = useState(false)
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const data = useSelector((state: RootState) => {
    return state.user;
  });

  // console.log(typeof data._id === String)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     const visible = prevScrollPosRef.current > currentScrollPos;
  //     setVisible(visible);
  //     prevScrollPosRef.current = currentScrollPos;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header className={`Navbar show`}>
      {visible ? <NavbarMoreOptions setVisible={setVisible} /> : null}
      <div className="navbar-contents">
        <div style={{display:"flex",alignItems:"center"}}>
          {" "}
          <AiOutlineMenu className="pc_hide" onClick={()=> setShowNavbar(!showNavbar)} style={{ color: "white", fontSize: "28px", marginRight:"15px" }} />
          <h2>Notion.io</h2>
        </div>
        <div className={`navigate-links ${showNavbar ? "show-dropdown" : "hide-dropdown"}`}>
          <Link
            href={"/#Home"}
            scroll={true}
            onClick={() => {setVisible(false);setShowNavbar(false)}}
            className={
              router.asPath === "/#Home"
                ? "active navbar_Navlinks"
                : "navbar_Navlinks"
            }
          >
            Home
          </Link>
          <Link
            href={"/#Products"}
            scroll={true}
            onClick={() => {setVisible(false);setShowNavbar(false)}}
            className={
              router.asPath === "/#Products"
                ? "active navbar_Navlinks"
                : "navbar_Navlinks"
            }
          >
            Products
          </Link>
          <Link
            href={"/#About"}
            scroll={true}
            onClick={() => {setVisible(false);setShowNavbar(false)}}
            className={
              router.asPath === "/#About"
                ? "active navbar_Navlinks"
                : "navbar_Navlinks"
            }
          >
            About
          </Link>
          <Link
            href={"/#Features"}
            scroll={true}
            onClick={() =>{ setVisible(false);setShowNavbar(false)}}
            className={
              router.asPath === "/#Features"
                ? "active navbar_Navlinks"
                : "navbar_Navlinks"
            }
          >
            Features
          </Link>
          <Link
            href={"/#Contact"}
            scroll={true}
            onClick={() => {setVisible(false);setShowNavbar(false)}}
            className={
              router.asPath === "/#Contact"
                ? "active navbar_Navlinks"
                : "navbar_Navlinks"
            }
          >
            Contact
          </Link>
          {typeof data._id === typeof "string" ? (
            <button
              style={{ cursor: "pointer", position: "relative", zIndex: "50" }}
              onClick={() => setVisible(!visible)}
              onMouseEnter={() => setVisible(true)}
              className="hide_mob bs_person"
            >
              <BsPersonCircle style={{ fontSize: "35px", marginTop: "5px" }} />
            </button>
          ) : (
            <Link href={"/login"} className="hide_mob">
              <Button
                className="login_hover_effect manage_margin"
                color="#09f1b8"
                background="transparent"
                border="2px solid var(--active)"
                txt="Login"
                padding="8px 14px"
                borderRadius="5px"
              />
            </Link>
          )}
        </div>
       
        {typeof data._id === typeof "string" ? (
            <button
              style={{ cursor: "pointer", position: "relative", zIndex: "50" }}
              onClick={() => setVisible(!visible)}
              onMouseEnter={() => setVisible(true)}
              className="pc_hide bs_person"
            >
              <BsPersonCircle style={{ fontSize: "35px", marginTop: "5px" }} />
            </button>
          ) : (
            <Link href={"/login"} className="pc_hide">
              <Button
                className="login_hover_effect manage_margin"
                color="#09f1b8"
                background="transparent"
                border="2px solid var(--active)"
                txt="Login"
                padding="8px 14px"
                borderRadius="5px"
                marginTop="0px !important"
              />
            </Link>
          )}

      </div>
    </header>
  );
};

export default Navbar;
