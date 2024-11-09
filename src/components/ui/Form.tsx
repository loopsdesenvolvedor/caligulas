"use client";

import { useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import Search from "@/components/ui/Search";
import IconButton from "@/components/ui/IconButton";

type FormData = {
  searchTerm: string;
};

const Form = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current.focus();
    }
  }, []);

  return (
    <form
      ref={formRef}
      className="relative mt-5 lg:mt-0 w-full lg:w-[524px] mx-auto lg:mx-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="searchTerm"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Search
            className="w-full h-10 lg:h-[38px] px-3 text-details60 border border-details20 lg:border-none bg-componentBackground rounded outline-none "
            placeholder="Faça sua busca..."
            type="text"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <IconButton
        type="submit"
        icon="search"
        className="absolute top-0 bottom-0 my-auto right-3 h-10 text-[18px] text-white opacity-80"
      />
    </form>
  );
};

export default Form;
