import Image from "next/image";
import { FC } from "react";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";

interface BoxProps {
  data: {
    title?: string;
    image?: string;
    discription?: string;
    originalPrice?: number;
    finalPrice?: number;
    discount?: number;
    _id?: string;
  },
  width?:string
}

const Box: FC<BoxProps> = ({ data, width }) => {
  const router = useRouter();

  const buyNow = async (e: any) => {
    e.preventDefault();
    try {
      router.push("/payment");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link
      href={`/singleproduct/${data._id}`}
      style={{ textDecoration: "none" }}
    >
      <div className="Box" style={{width:`${width}`}}>
        <Image
          src={`${data.image}`}
          alt="product-image"
          width={1000}
          height={1000}
        />
        <div className="about-product">
          <h3>{data.title}</h3>
          <div className="price-details">
            <p>${data.finalPrice?.toLocaleString()}.00</p>
            <span>${data.originalPrice?.toLocaleString()}.00</span>
            {router.asPath === "/cart" ? null : (
              <span
                className="discount-style-ps-absolute handle-Discount"
                style={{ color: "white", textDecoration: "none" }}
              >
                {data.discount}% Off
              </span>
            )}
          </div>

          <Button
            txt="Buy now"
            color="var(--bg-background-dark)"
            background="#e4e4e4"
            onClick={buyNow}
          />
        </div>
      </div>
    </Link>
  );
};

export default Box;
