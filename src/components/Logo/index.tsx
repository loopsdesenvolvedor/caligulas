import Image from "next/image";

import logoCaligulas from "@/assets/caligulas.svg";

type LogoType = {
  width: number;
  height: number;
};

const Logo = ({ width, height }: LogoType) => {
  return (
    <Image
      width={width}
      height={height}
      src={logoCaligulas}
      alt="Logo Caligula's"
    />
  );
};

export default Logo;
