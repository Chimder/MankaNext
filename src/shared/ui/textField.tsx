import { TextField } from "@radix-ui/themes";
import React, { ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface TextFieldValueProps {
  value: string;
  change: (event: ChangeEvent<HTMLInputElement>) => void;
}
function TextFieldd({ value, change }: TextFieldValueProps) {
  return (
    <>
      <TextField.Root className='' color='orange'>
        <TextField.Slot className=''>
          <MagnifyingGlassIcon height='20' width='20' color='orange' />
        </TextField.Slot>
        <TextField.Input
          className='text_field_search'
          onChange={change}
          value={value}
          placeholder='Search Manga ...'
        />
      </TextField.Root>
    </>
  );
}

export default TextFieldd;
