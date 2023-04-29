import Box from "@/components/ui/Box";
import { AppDispatch, RootState } from "@/store/store";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  let total: number;
  const data = useSelector((state: RootState) => {
    return state.user;
  });

  interface CartItem {
    title: string;
    image: string;
    originalPrice: number;
    finalPrice: number;
    discount: number;
    _id: string;
  }

  // {data.cart.length <= 0 ? (
  //     <div className="nothing_template">
  //       <h2>Nothing in Cart</h2>
  //       <Link href={"/"}>
  //         <p>Back to home page</p>
  //       </Link>
  //     </div>
  //   // ) : (
  return (
    <>
      {data.cart.length <= 0 ? (
        <div className="nothing_template">
          <h2>Nothing in Cart</h2>
          <Link href={"/"}>
            <p>Back to home page</p>
          </Link>
        </div>
      ) : (
        <div className="Page_Container">
          {data.cart.map((item: CartItem) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                key={Math.floor(Math.random() * 100000000000)}
                href={`/singleItem/${item._id}`}
              >
                <Box data={item} />{" "}
              </Link>
            );
          })}
          <div className="cart_total_amount">
            <div className="price_container_cart_section">
              <p className="total_main_price">
                Total: $
                {data.cart
                  .reduce((acc: any, res: any) => acc + res.finalPrice, 0)
                  .toLocaleString()}
                .00
              </p>
              <p className="original_main_price">
                $
                {data.cart
                  .reduce((acc: any, res: any) => acc + res.originalPrice, 0)
                  .toLocaleString()}
                .00
              </p>
            </div>
            <p className="money_saved">
              U have saved a total of $
              {(
                data.cart.reduce(
                  (acc: any, res: any) => acc + res.originalPrice,
                  0
                ) -
                data.cart.reduce(
                  (acc: any, res: any) => acc + res.finalPrice,
                  0
                )
              ).toLocaleString()}
              .00
            </p>
            <Link href={"/payment"} style={{width:"100%"}}>
              <Button
                background="#09f1b8"
                authReq={true} 
                txt="Proceed To Payment"
                marginTop={"20px"}
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
