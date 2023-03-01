import { ReactNode } from "react";

interface buttonProps {
  children: ReactNode;
}

const Button = (props: buttonProps) => {
  return (
    <button className=" flex mt-8 gap-2 w-60 px-4 py-2 border justify-center border-[#E3E4E68C] rounded-[100px] uppercase font-sans text-base text-[#E3E4E6] hover:bg-primary">
      {props.children}
    </button>
  );
};

export default Button;
