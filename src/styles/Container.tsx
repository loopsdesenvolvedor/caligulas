import { ContainerProps } from "@/@types/ContainerProps";

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[1208px] mx-auto px-5">{children}</div>;
};

export default Container;
