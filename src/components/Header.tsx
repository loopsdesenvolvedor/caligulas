"use client";

import Container from "./Container";
import Image from "next/image";

import logo from "../../public/caligulas.svg";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";

import Search from "./Search";
import { useState } from "react";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  function toggleSearch() {
    setShowSearch((prev) => !prev);
  }
  return (
    <header className="w-full h-auto border-b border-border-default">
      <Container>
        <nav className="w-full h-[60px] px-5 flex justify-between items-center">
          {showSearch && <Search />}
          <div className="flex justify-start items-center gap-6">
            <button type="button">
              <HiOutlineMenuAlt4 size={30} />
            </button>
            <Image
              className="w-auto h-8 md:h-[42px]"
              src={logo}
              alt="Logo Caligula's"
            />
          </div>
          <div className="flex justify-end items-center gap-8">
            <button onClick={toggleSearch}>
              <FiSearch size={22} />
            </button>
            <button>
              <FaCircleUser size={22} />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
