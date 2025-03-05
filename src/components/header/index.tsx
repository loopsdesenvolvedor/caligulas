import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <S.Header>
      <S.Root>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo Caligula's"
            width={106}
            height={32}
          />
        </Link>
        <S.Navigation></S.Navigation>
      </S.Root>
    </S.Header>
  );
};

export default Header;
