import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: "primary" | "secondary" | "tertiary";
}
export default function Button({
  varient = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "py-14 px-18 text-16 font-medium rounded-10 border-1",
        classes[varient],
        className
      )}
      {...props}
    ></button>
  );
}

const classes: Record<NonNullable<Props["varient"]>, string> = {
  primary: "bg-main border-main text-white",
  secondary: "border-main bg-white text-main",
  tertiary: "border-transparent bg-transparent text-gray700",
};
