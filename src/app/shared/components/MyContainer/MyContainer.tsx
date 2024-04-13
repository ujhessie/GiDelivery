interface IMyContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const MyContainer: React.FC<IMyContainerProps> = ({
  children,
  className,
}) => {


  return (
    <>
      <div className={`w-full flex justify-center px-[10px] md:px-[30px] lg:px-[70px]  ${className}`}>
        <div className='content-center  max-w-screen-lg w-[100%]'> {children}</div>
      </div>
    </>
  );
};
