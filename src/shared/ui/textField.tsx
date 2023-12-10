import { TextField } from "@radix-ui/themes";
import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function TextFieldd() {
  return (
    <>
      <TextField.Root className='' color='orange'>
        <TextField.Slot className=''>
          <MagnifyingGlassIcon height='20' width='20' color='orange' />
        </TextField.Slot>
        <TextField.Input className='text_field_search' placeholder='lol' />
      </TextField.Root>
    </>
  );
}

export default TextFieldd;
