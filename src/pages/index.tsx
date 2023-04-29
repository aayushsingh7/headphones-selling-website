import { FC } from "react";
import Home from "./home";
import About from "./about";
import Features from "./features";
import  Product  from "./Product";
import Contact from "./contact";
import Footer from "@/layouts/Footer";
import { GetServerSideProps } from "next";

interface indexProps {
  data:any
}

const index: FC<indexProps> = ({data}) => {
  return (
    <>
      <Home />
      <Features />
      <Product data={data.data}/>
      <About />
      <Contact />
      <Footer />
    </>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  try {
    let data = await fetch("http://localhost:3000/api/getAllProducts");
    let response = await data.json();
    console.log(response)
    return {
      props: {
        data: response,
      },
    };

    
  } catch (err) {
    console.log(err);
    return {
      props: {
        data:[],
      },
    };
  }
};


export default index;
