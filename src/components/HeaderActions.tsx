"use client";

import Logo from "./Logo";
import ButtonWithIcon from "./ButtonWithIcon";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { toggleExclusive } from "@/store/slices/headerSlice";
import { RootState } from "@/store/store";

const HeaderActions = () => {
  const dispatch = useDispatch();
  const { favoritesOpen, menuOpen, searchOpen, userOpen } = useSelector(
    (state: RootState) => state.header
  );

  function handleButtonClick(
    key: "menuOpen" | "searchOpen" | "favoritesOpen" | "userOpen"
  ) {
    alert(`${key} clicked!`);
    dispatch(toggleExclusive(key));
  }

  return (
    <div className="w-full h-16 sm:h-20 flex items-center justify-between py-[15px]">
      <div className="flex items-center gap-[30px]">
        <ButtonWithIcon
          onClick={() => handleButtonClick("menuOpen")}
          type="button"
          icon={<HiOutlineMenuAlt4 size={26} color="#fff" />}
        />
        <Logo />
      </div>
      <nav className="flex items-center gap-[30px]">
        <ButtonWithIcon
          type="button"
          icon={<FiSearch size={20} color="#fff" />}
        />
        <ButtonWithIcon
          type="button"
          icon={<MdFavorite size={20} color="#fff" />}
        />
        <ButtonWithIcon
          type="button"
          icon={<FaUserCircle size={20} color="#fff" />}
        />
      </nav>
    </div>
  );
};

export default HeaderActions;
