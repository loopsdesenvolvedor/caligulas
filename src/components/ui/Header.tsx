import Container from "@/styles/Container";
import HeaderActions from "@/components/ui/HeaderActions";

const Header = () => {
  return (
    <header className="border-b border-border">
      <Container>
        <HeaderActions />
      </Container>
    </header>
  );
};

export default Header;
