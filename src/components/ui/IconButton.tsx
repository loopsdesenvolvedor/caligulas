import { IoMdMenu } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

type IconButtonProps = {
  icon: "menu" | "favorite" | "user" | "search";
  className?: string;
  type?: "submit" | "button";
};

const IconButton = ({ icon, className, type }: IconButtonProps) => (
  <button type={type === "button" ? "button" : "submit"}>
    {icon === "menu" ? (
      <IoMdMenu className={`${className}`} />
    ) : icon === "favorite" ? (
      <MdOutlineFavorite className={`${className}`} />
    ) : icon === "search" ? (
      <IoSearchSharp className={`${className}`} />
    ) : (
      <FaUser className={`${className}`} />
    )}
  </button>
);

export default IconButton;
