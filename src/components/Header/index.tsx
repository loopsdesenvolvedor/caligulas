import Link from "next/link";
import * as H from "./header.styles";

import Container from "../Container";

import Logo from "../Logo";

const Header = () => {
  return (
    <H.Root>
      <Container>
        <Link href="/">
          <Logo width={100} height={100} />
        </Link>
      </Container>
    </H.Root>
  );
};

export default Header;
