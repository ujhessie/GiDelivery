import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

interface IMyContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const MyContainer: React.FC<IMyContainerProps> = ({
  children,
  className,
}) => {
  useEffect(() => {
    ScrollReveal().reveal(".my-element", {
      delay: 200,
      distance: "50px",
      origin: "bottom",
      easing: "ease-in-out",
      reset: true,
    });
  }, []);

  return (
    <>
      <div
        className={`w-full flex justify-center px-[10px] md:px-[30px] lg:px-[70px] my-element  ${className}`}
      >
        <div className='content-center relative max-w-screen-lg w-[100%]'>
          
          {children}
        </div>
      </div>
    </>
  );
};
