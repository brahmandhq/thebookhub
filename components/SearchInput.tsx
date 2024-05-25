"use client";

import qs from "query-string";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useDebounce from "@/hooks/useDebounce";

import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 600);

  const handleChange = (e: { target: { value: string } }) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div>
      <Input
        placeholder="What do you want to read? Search By Title, Language, Author OR Genre..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
