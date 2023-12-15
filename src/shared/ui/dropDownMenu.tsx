import { Button, DropdownMenu, Theme } from "@radix-ui/themes";
import React from "react";
import { IoCode } from "react-icons/io5";
import SelectDropBtn from "./selectDropBtn";
import SelectDropChapter from "./selectDropChapter";

interface DropMenuProps {
  text?: string | string[];
  clsn?: string;
  ctgr?: "genres" | "status" | "lang" | "sort" | "chapter";
  click?: (e: React.MouseEvent<HTMLButtonElement>, category: string) => void;
  data?: any;
}

export const DropMenu = ({ text, clsn, ctgr, click, data }: DropMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      <DropdownMenu.Root
        open={isMenuOpen}
        onOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
      >
        <DropdownMenu.Trigger>
          {ctgr == "chapter" ? (
            <div className='Word_container'>{text}</div>
          ) : (
            <Button className='btn_drop' variant='outline' color='orange'>
              <span>{text}</span>
              <IoCode />
            </Button>
          )}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className={clsn} variant='solid'>
          {ctgr == "chapter" && (
            <SelectDropChapter
              data={data}
              setIsMenuOpen={setIsMenuOpen}
            ></SelectDropChapter>
          )}
          {ctgr == "genres" && (
            <SelectDropBtn click={click!} type='genres'></SelectDropBtn>
          )}
          {ctgr == "status" && (
            <SelectDropBtn click={click!} type='status'></SelectDropBtn>
          )}
          {ctgr == "lang" && (
            <SelectDropBtn click={click!} type='lang'></SelectDropBtn>
          )}
          {ctgr == "sort" && (
            <SelectDropBtn type='sort' click={click!}></SelectDropBtn>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};
