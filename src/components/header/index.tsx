import * as S from "./styles";

import DropdownItem from "../dropdownItem";
import Input from "../input";

import Link from "next/link";
import Image from "next/image";

import { TbMenu } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Container from "../container";

const Header = () => {
  return (
    <S.Header>
      <Container>
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
              icon={<MdFavorite color="#A90015" size={16} />}
              className="favorite"
            />
            <DropdownItem
              type="button"
              text="Entrar"
              icon={<FaUserAlt color="#FFF" size={14} />}
              className="user"
            />
          </S.NavigationRight>
        </S.Root>
        <S.FormSearch>
          <div className="form-content">
            <S.DropdownGender>
              <span>Hetero</span>
              <IoMdArrowDropdown color="#fff" size={16} />
            </S.DropdownGender>
            <Input type="text" placeholder="Faça sua busca..." />
            <DropdownItem
              type="submit"
              icon={<IoIosSearch color="#fff" size={16} />}
              className="submit"
            />
          </div>
        </S.FormSearch>
      </Container>
    </S.Header>
  );
};

export default Header;
