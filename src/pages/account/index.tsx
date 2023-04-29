import Button from "@/components/ui/Button";
import { RootState } from "@/store/store";
import { FC } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

interface AccountProps {}

const Account: FC<AccountProps> = ({}) => {

    const user = useSelector((state:RootState)=> {return state.user})

  return (
    <div
      className="Account"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="User_Account_Container">
        <IoPersonCircleSharp className="account_icon" />
        <input
          type="text"
          placeholder="Your Name"
          required
          name="name"
          autoComplete="off"
          defaultValue={user.name}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          name="email"
          autoComplete="off"
          readOnly
          value={user.email}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          name="password"
          readOnly
          value={"**********"}
        />

    <Button marginTop="30px" background="#006aff" color="var(--main-text-light)"  txt="Save Changes" borderRadius="40px"/>
      </div>
    </div>
  );
};

export default Account;
