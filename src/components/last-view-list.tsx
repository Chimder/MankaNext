import {
  deleteLastView,
  shortMankaType,
} from "@/shared/Store/Slices/last-view";
import { useAppDispatch, useAppSelector } from "@/shared/Store/store";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function LastViewList({}: Props) {
  const { mankaView } = useAppSelector((state) => state.lastView);
  const dispatch = useAppDispatch();

  const handleRemove = (name: string) => {
    dispatch(deleteLastView(name));
  };

  if (mankaView.length === 0) return null;
  return (
    <section>
      <h1 className="pl-2 text-4xl md:text-2xl">Last Viewed</h1>
      <div className="flex w-full py-6 pl-2">
        <ul className="flex min-h-32 w-full items-center">
          {mankaView &&
            mankaView.map((manka: shortMankaType) => (
              <li className="group relative flex pr-10" key={manka.name}>
                <Link
                  href={`/manka/${manka?.name}/${manka.lastCapter}`}
                  className="flex max-w-64 rounded-lg bg-slate-500"
                >
                  <img
                    className="max-h-28 w-20 rounded-lg"
                    src={manka.img}
                    alt=""
                  />
                </Link>
                <button
                  onClick={() => handleRemove(manka.name)}
                  className="duration-400 absolute right-5 top-[-16px] z-10 h-7 w-7 scale-75 transform rounded-full
                   bg-slate-900 opacity-0 transition-all ease-in-out group-hover:translate-y-1 group-hover:scale-100 group-hover:opacity-100"
                >
                  <X className="h-full w-full" />
                </button>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
