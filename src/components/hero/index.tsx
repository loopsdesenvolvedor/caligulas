import Title from "../title";
import * as S from "./styles";
import Container from "../container";

const Hero = () => {
  return (
    <S.Root>
      <Container>
        <Title heading="h1" className="h1">
          Todos os vídeos <br />
          <strong>Heterossexual</strong>
        </Title>
      </Container>
    </S.Root>
  );
};

export default Hero;
