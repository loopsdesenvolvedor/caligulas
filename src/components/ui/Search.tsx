import React from "react";

type InputSearch = {
  type: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Search = ({
  type,
  className,
  value,
  onChange,
  placeholder,
}: InputSearch) => (
  <input
    className={className}
    type={type}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);

export default Search;
