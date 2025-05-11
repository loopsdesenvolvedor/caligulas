import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[1196px] h-auto w-full mx-auto">{children}</div>;
};

export default Container;
