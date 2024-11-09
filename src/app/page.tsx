import Container from "@/components/container/PageContainer";
import Form from "@/components/ui/Form";

const Home = () => {
  return (
    <main>
      <Container>
        <div className="lg:hidden">
          <Form />
        </div>
      </Container>
    </main>
  );
};

export default Home;
