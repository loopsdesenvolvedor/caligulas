import * as S from "./styles";
import { ButtonProps } from "@/@types/Button";

const DropdownItem = ({ text, type, className, icon }: ButtonProps) => {
  return (
    <S.Button>
      <button type={type} className={className}>
        {icon}
        <span>{text}</span>
      </button>
    </S.Button>
  );
};

export default DropdownItem;
