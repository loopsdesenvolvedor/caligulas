import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
};

export default PageContainer;
