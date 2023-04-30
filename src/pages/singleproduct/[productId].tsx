import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GetServerSideProps } from "next";
import { addToCart , removeFromCart } from "@/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductIdProps {
  data: {
    title: string;
    image: string;
    discription: string;
    originalPrice: number;
    finalPrice: number;
    discount: number;
    _id: string;
  };
}

interface CartItem {
  title: string;
  image: string;
  originalPrice: number;
  finalPrice: number;
  discount: number;
  _id: string;
}

const ProductId: FC<ProductIdProps> = ({ data }) => {

  const [loading , setLoading] = useState(false)
  const [showMore , setShowMore] = useState(false)
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => {
    return state.user;
  });

  const addItemToCart = async () => {
    console.log("Add To Cart")
     setLoading(true)
    try {
      let cartItem: CartItem = {
        title: data.title,
        image: data.image,
        originalPrice: data.originalPrice,
        finalPrice: data.finalPrice,
        discount: data.discount,
        _id: data._id,
      };
      
      
      let addItem = await fetch("https://tiny-moxie-58820c.netlify.app/api/addToCart", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user._id,
          data: cartItem,
        }),
      });
      let response = await addItem.json();
      dispatch(addToCart(cartItem));
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
    } catch (err) {
      console.log(err);
    }
  };

  const removeItemFromCart = async () => {
    // console.log("Remove From Cart")
    try {
      setLoading(true)
      let removeItem = await fetch("https://tiny-moxie-58820c.netlify.app/api/removeFromCart", {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user._id,
          itemId: data._id
        }),
      });
      let response = await removeItem.json();
      setLoading(false)
      dispatch(removeFromCart(data._id));
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
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="View-Product">
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
      <div className="ProductImage">
      {/* {
        user.cart.some((item: CartItem) => item._id === data._id) ? (
          <AiFillHeart className="add-to-wishlist" onClick={removeItemFromCart} />
        ) : (
          <AiOutlineHeart className="add-to-wishlist" onClick={addItemToCart} />
        )        
      } */}
        <Image
          height={1000}
          width={1000}
          alt="Product image"
          src={data.image}
        />
      </div>
      <div className="product-details__singlePage">
        <h2 className="product__name">{data.title}</h2>
        <p className="product_discription">
          {data.discription.length <= 200 ?  data.discription :  showMore ? data.discription : data.discription.slice(0,200)}{showMore ? <span onClick={()=> setShowMore(false)}>Show less</span> : <span onClick={()=> setShowMore(true)}>Show more...</span> }</p>
        <div className="price-details single__page font__large sp_price">
          <p className="sp_price">${data.finalPrice?.toLocaleString()}.00</p>
          <span>${data.originalPrice?.toLocaleString()}.00</span>
          <span
            className="discount-style-ps-absolute"
            style={{ color: "white", textDecoration: "none" }}
          >
            {data.discount}% Off
          </span>
        </div>

        <p className="Stock__availability">In Stock.</p>

        <div className="btn-options__select">
     <Link href={'/payment'} style={{textDecoration:"none"}}>
     <Button
            background="var(--bg-background-highlight)"
            txt="Buy now"
            color="black"
          />
     </Link>
         {
          user.cart.some((item:CartItem)=> item._id === data._id) ? 
          <Button
          txt={"Remove From Cart"}
          color="var(--bg-background-highlight)"
          border="1px solid var(--bg-background-highlight)"
          background="transparent"
          marginTop="10px"
          isLoading={loading}
          loadingTxt="Removing From Cart..."
          onClick={removeItemFromCart}
          authReq={true}
        />
        : 
          <Button
          txt={"Add To Cart"}
          color="var(--bg-background-highlight)"
          border="1px solid var(--bg-background-highlight)"
          background="transparent"
          marginTop="10px"
          isLoading={loading}
          loadingTxt="Adding To Cart..."
          onClick={addItemToCart}
          authReq={true}
        />
         }
      
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    let data = await fetch(
      `https://tiny-moxie-58820c.netlify.app/api/getSingleProduct/${context.query.productId}`
    );
    let response = await data.json();
    // console.log(response)
    return {
      props: {
        data: response.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: [],
      },
    };
  }
};

export default ProductId;
