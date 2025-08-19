import Input from "./Input";
import { FiSearch } from "react-icons/fi";

const Form = () => {
  return (
    <form className="w-full  flex  justify-between items-center relative">
      <Input
        type="text"
        placeholder="Busque por um vídeo"
        className="w-full h-9 md:h-10 bg-background-components rounded-full px-3 md:px-[14px] text-sm font-normal outline-none"
      />
      <button className="absolute top-0 bottom-0 my-auto right-3 md:right-[14px] cursor-pointer">
        <FiSearch size={18} />
      </button>
    </form>
  );
};

export default Form;
