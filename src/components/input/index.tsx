import * as S from "./styles";

type InputRequest = {
  type?: "text" | "email" | "password" | "checked";
  placeholder?: string;
};

const Input = ({ type, placeholder }: InputRequest) => {
  return (
    <>
      <S.Root type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;
