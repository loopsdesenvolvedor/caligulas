import { TitleProps } from "@/@types/Title";
import * as S from "./styles";

const Title = ({ heading, children, className }: TitleProps) => {
  return <S.Heading className={className}>{children}</S.Heading>;
};

export default Title;
