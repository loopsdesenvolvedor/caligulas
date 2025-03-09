import * as S from "./styles";

import { ContainerProps } from "@/@types/Container";

const Container = ({ children }: ContainerProps) => {
  return <S.Root>{children}</S.Root>;
};

export default Container;
