import { forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function Input(
  { className, ...props }: InputHTMLAttributes<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      className={cn(
        "border-b-1 border-b-gray200 py-17 pl-9 pr-21 outline-none",
        "focus:border-b-gray600 focus:bg-bg focus:rounded-t-6",
        className
      )}
      {...props}
    />
  );
});

export default Input;
