import { ButtonWithIconProps } from "@/@types/ButtonWithIconProps";

const ButtonWithIcon = ({
  text,
  icon,
  onClick,
  className,
  type,
}: ButtonWithIconProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {icon} <span> {text}</span>
    </button>
  );
};

export default ButtonWithIcon;
