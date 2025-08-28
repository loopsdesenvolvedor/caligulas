import Link from "next/link";
import logoSvg from "../../public/caligulas.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image src={logoSvg} alt="Logo Caligula's" priority quality={100} />
      </Link>
    </>
  );
};

export default Logo;
