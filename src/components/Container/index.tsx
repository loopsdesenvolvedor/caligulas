import { ReactNode } from "react";
import * as S from "./container.styles";

type ContainerType = {
  children: ReactNode;
};

const Container = ({ children }: ContainerType) => {
  return <S.Root>{children}</S.Root>;
};

export default Container;
