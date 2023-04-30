import { ButtonHTMLAttributes, FC } from "react";
import Link from "next/link";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  txt: string;
  background: string;
  color?: string;
  border?: string;
  marginTop?: string;
  borderRadius?: string;
  padding?: string;
  loadingTxt?: string;
  className?: string;
  authReq?: boolean;
  pointerEvent?:string
}

const Button: FC<ButtonProps> = ({
  authReq,
  className,
  isLoading,
  loadingTxt,
  txt,
  background,
  color,
  border,
  marginTop,
  padding,
  borderRadius,
  pointerEvent,
  ...props
}) => {
  const user = useSelector((state: RootState) => {
    return state.user;
  });


  return authReq ? (
   typeof  user._id === typeof "user_id" ? (
      <button
        className={className ? `btn ${className}` : "btn"}
        style={{
          background: background,
          color: color,
          border: border,
          marginTop: marginTop,
          borderRadius: borderRadius,
          padding: padding,
          pointerEvents:isLoading ? "none" : "auto"
        }}
        {...props}
      >
        {isLoading ? loadingTxt : txt}
      </button>
    ) : (
      <Link href="/login">
        <button
          className={className ? `btn ${className}` : "btn"}
          style={{
            background: background,
            color: color,
            border: border,
            marginTop: marginTop,
            borderRadius: borderRadius,
            padding: padding,
            pointerEvents:isLoading ? "none" : "auto"
          }}
          {...props}
        >
          {isLoading ? loadingTxt : txt}
        </button>
      </Link>
    )
  ) : (
    <button
      className={className ? `btn ${className}` : "btn"}
      style={{
        background: background,
        color: color,
        border: border,
        marginTop: marginTop,
        borderRadius: borderRadius,
        padding: padding,
        pointerEvents:isLoading ? "none" : "auto"
      }}
      {...props}
    >
      {isLoading ? loadingTxt : txt}
    </button>
  );
};

export default Button;
