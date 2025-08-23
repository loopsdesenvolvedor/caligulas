import { useDispatch } from "react-redux";
import { AppDispach } from "@/store";
import { toggleSearch } from "@/store/slices/searchSlice";

import Link from "next/link";
import Form from "./Form";

const Search = () => {
  const dispatch = useDispatch<AppDispach>();
  return (
    <>
      <section
        className="absolute top-0 left-0 w-full h-screen flex flex-col bg-background px-5 z-50"
        role="search"
      >
        <div className="w-full md:hidden h-[60px] flex justify-between items-center gap-2.5">
          <Form />
          <button
            onClick={() => dispatch(toggleSearch())}
            className="w-auto h-9 px-3  bg-background-components text-xs text-white uppercase rounded-full cursor-pointer"
          >
            Cancelar
          </button>
        </div>
        <div>
          <h2 className="text-[18px] my-[24px] font-semibold tracking-[0.5px]">
            🔥 Pequisas quentes
          </h2>

          <ul className="flex flex-col gap-4 pl-10">
            <li>
              <Link
                className="text-sm font-normal underline opacity-75 hover:opacity-100 transition-all duration-300"
                href="/"
              >
                Pornô amador
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal underline opacity-75 hover:opacity-100 transition-all duration-300"
                href="/"
              >
                Cornô feliz
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal underline opacity-75 hover:opacity-100 transition-all duration-300"
                href="/"
              >
                Cornô feliz
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal underline opacity-75 hover:opacity-100 transition-all duration-300"
                href="/"
              >
                Famosas do Tiktok
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal underline opacity-75 hover:opacity-100 transition-all duration-300"
                href="/"
              >
                Cornô feliz
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal underline opacity-75 hover:opacity-100 transition-all duration-300"
                href="/"
              >
                Pornô amador
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal underline opacity-75"
                href="/"
              >
                Famosas do Tiktok
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal underline opacity-75"
                href="/"
              >
                Cornô feliz
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal underline opacity-75"
                href="/"
              >
                Pornô amador
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal underline opacity-75"
                href="/"
              >
                Cornô feliz
              </Link>
            </li>
          </ul>
          <Link
            className="w-full h-12 mt-[24px] flex justify-center items-center rounded bg-red-default text-[16px] font-semibold text-white"
            href="/"
          >
            Pesquisar por categoria
          </Link>
        </div>
      </section>
    </>
  );
};

export default Search;
