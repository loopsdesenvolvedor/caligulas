import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

import { TbMenu } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <S.Header>
      <S.Root>
        <S.Button>
          <TbMenu color="#fff" size={24} />
          <span>Menu</span>
        </S.Button>
        <Link href="/" className="logo">
          <Image
            src="/logo.svg"
            alt="Logo Caligula's"
            width={106}
            height={32}
          />
        </Link>

        <S.NavigationRight>
          <S.Button>
            <MdFavorite color="#A90015" size={18} />
            <span>Favoritos</span>
          </S.Button>
          <S.Button>
            <FaUserAlt color="#fff" size={16} />
            <span>Entrar</span>
          </S.Button>
        </S.NavigationRight>
      </S.Root>
    </S.Header>
  );
};

export default Header;
