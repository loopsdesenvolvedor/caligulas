import Image from "next/image";
import PageContainer from "./container/PageContainer";

import IconButton from "./ui/IconButton";
import caligulas from "../../public/caligulas.svg";

const Header = () => {
  return (
    <header className="w-full h-auto border-b  border-details10 ">
      <PageContainer>
        <div className="w-full h-[60px] flex justify-between items-center">
          <div className="w-[60%] flex justify-between lg:w-auto">
            <IconButton icon="menu" className="text-[32px] lg:hidden" />
            <Image src={caligulas} alt="Logo Caligula's" />
          </div>

          <div className="flex gap-[12px] lg:gap-[50px] items-center">
            <div className="flex items-center gap-[5px]">
              <IconButton
                icon="favorite"
                className="text-[20px] lg:text-[15px]"
              />
              <span className="hidden lg:inline text-[15px]">Favoritar</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <IconButton icon="user" className="text-[20px] lg:text-[15px]" />
              <span className="hidden lg:inline text-[15px]">Entrar</span>
            </div>
          </div>
        </div>
      </PageContainer>
    </header>
  );
};

export default Header;
