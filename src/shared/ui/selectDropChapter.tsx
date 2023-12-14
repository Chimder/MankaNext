import Link from "next/link";
import React from "react";

type Data = {
  text?: string;
  img?: string;
  gap?: string;
  value?: string;
  color?: string;
  size?: string;
};
interface SelectDropBtnProps {
  type?: string;
  data?: string[];
  click?: (e: React.MouseEvent<HTMLButtonElement>, category: string) => void;
}
function SelectDropChapter({ type, click, data }: SelectDropBtnProps) {
  return (
    <div className='Chapters_List'>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      {/* <Link href='#'>Chapter : 1 Cammy Big Ass sadasdad</Link> */}
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      {/* <Link href='#'>Chapter : 1 Cammy Big Assdfser 4ferfjj</Link> */}
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
      <Link href='#'>Chapter : 1 Cammy Big Ass</Link>
    </div>
  );
}
export default SelectDropChapter;
