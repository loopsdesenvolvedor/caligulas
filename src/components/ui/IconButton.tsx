import { IoMdMenu } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";

type IconButtonProps = {
  icon: "menu" | "favorite" | "user";
  className?: string;
};

const IconButton = ({ icon, className }: IconButtonProps) => (
  <button type="button">
    {icon === "menu" ? (
      <IoMdMenu className={className} />
    ) : icon === "favorite" ? (
      <MdOutlineFavorite className={className} />
    ) : (
      <FaUser className={className} />
    )}
  </button>
);

export default IconButton;
