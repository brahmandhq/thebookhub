"use client";

import qs from "query-string";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useDebounce from "@/hooks/useDebounce";

import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 600);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: '/search',
      query
    });

    router.push(url);
  }, [debouncedValue, router]);

  return ( 
    <Input 
      placeholder="What do you want to read?"
      value={value}
      onChange={(e: { target: { value: SetStateAction<string>; }; }) => setValue(e.target.value)}
    />
  );
}
 
export default SearchInput;