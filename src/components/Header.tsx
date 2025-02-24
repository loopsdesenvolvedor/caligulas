"use client";

import Link from "next/link";
import logo from "../../public/caligulas.svg";
import Image from "next/image";

import { HiMenuAlt4 } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header className="w-full h-auto border-b border-b-borderColor">
      <div className="container h-[68px] flex justify-between items-center">
        <button
          className={`
            w-[100px] h-8 rounded text-whiteColor flex justify-center
            items-center gap-2 border border-borderColor hover:border-redColor hover:bg-redColor transition-all duration-200`}
        >
          <HiMenuAlt4 size={25} />{" "}
          <span className="uppercase text-xs">Menu</span>
        </button>

        <Link href="/" className="md:ml-5 mr-auto">
          <Image src={logo} alt="Logo Caligula's" priority quality={100} />
        </Link>
        <nav className="flex justify-between items-center">
          <button className="w-12 md:w-[110px] h-8 gap-[10px] btn-header transition-all duration-200 text-redColor hover:bg-redColor hover:text-whiteColor rounded-s">
            <MdFavorite className="w-4 " />
            <span className="hidden md:flex text-whiteColor text-sm">
              Favoritos
            </span>
          </button>
          <button className="w-12 h-8 md:w-[120px]  gap-[10px]   btn-header transition-all duration-200  hover:bg-redColor border-l-0 rounded-e">
            <FaUser className="w-4 " /> <span className="text-sm">Entrar</span>{" "}
            <IoIosArrowDown className="w-3" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
