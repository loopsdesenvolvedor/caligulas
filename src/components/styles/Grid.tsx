import Link from "next/link";
import Title from "../utils/Title";
import Image from "next/image";

import { MdVerified } from "react-icons/md";

import imgTest from "@/assets/image.jpg";

const Grid = () => {
  return (
    <div className="px-5 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
      <div className="w-full h-[260px]  bg-background-components">
        <div className="w-fullh-auto">
          <Image
            src={imgTest}
            alt="Image teste"
            priority
            quality={100}
            width={600}
            height={400}
            className="w-full h-auto object-contain"
          />
          <Link href="/">
            <Title
              tag="h3"
              title="Meia-irmã! Você pode esfregar minha BUCETA, mas NÃO PENETRA? teste teste teste teste test teste"
              className="px-2.5 my-2 text-[15px] font-normal line-clamp-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grid;
