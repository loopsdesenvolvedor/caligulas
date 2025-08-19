"use client";

import Container from "./Container";
import Image from "next/image";

import logo from "../../public/caligulas.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";

import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { AppDispach, RootState } from "@/store";
import { toggleSearch } from "@/store/slices/searchSlice";
import Form from "./Form";

const Header = () => {
  const dispach = useDispatch<AppDispach>();
  const isOpen = useSelector((state: RootState) => state.toggleSearch.isOpen);

  return (
    <header className="w-full h-auto border-b border-border-default">
      <Container>
        <nav className="w-full h-[60px] md:h-[80px] px-5 flex justify-between items-center">
          {isOpen && <Search />}
          <div className="flex justify-start items-center gap-6">
            <button type="button" className="cursor-pointer">
              <HiOutlineMenuAlt4 size={30} />
            </button>
            <Image
              className="w-auto h-8 md:h-[42px]"
              src={logo}
              alt="Logo Caligula's"
            />
          </div>
          <div className="hidden relative w-full max-w-[500px] md:flex  justify-center items-center">
            <Form />
          </div>
          <div className="flex justify-end items-center gap-8">
            <button
              onClick={() => dispach(toggleSearch())}
              className="cursor-pointer md:hidden"
            >
              <FiSearch size={22} />
            </button>
            <button className="cursor-pointer">
              <FaCircleUser size={22} />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
