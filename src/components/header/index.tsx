import * as S from "./styles";

import DropdownItem from "../dropdownItem";

import Link from "next/link";
import Image from "next/image";

import { TbMenu } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <S.Header>
      <S.Root>
        <DropdownItem
          type="button"
          icon={<TbMenu color="#fff" size={24} />}
          className="menu"
        />

        <Link href="/" className="logo">
          <Image
            src="/logo.svg"
            alt="Logo Caligula's"
            width={106}
            height={32}
          />
        </Link>

        <S.NavigationRight>
          <DropdownItem
            type="button"
            text="Favoritos"
            icon={<MdFavorite color="#A90015" size={18} />}
            className="favorite"
          />
          <DropdownItem
            type="button"
            text="Entrar"
            icon={<FaUserAlt color="#FFF" size={16} />}
            className="user"
          />
        </S.NavigationRight>
      </S.Root>
    </S.Header>
  );
};

export default Header;
