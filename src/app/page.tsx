import Title from "@/components/utils/Title";
import Container from "@/components/styles//Container";
import Grid from "@/components/styles/Grid";

const Home = () => {
  return (
    <main>
      <Container>
        <Title
          title="Vídeos recentes - Caligulas"
          tag="h1"
          className="mt-[24px] flex items-center relative pl-5 before:content-[''] before:inline-block before:w-[3px] before:h-4 before:bg-yellow-default before:mr-2 text-[18px] font-medium"
        />
        <Grid />
      </Container>
    </main>
  );
};

export default Home;
