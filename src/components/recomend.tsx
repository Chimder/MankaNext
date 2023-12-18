import React from "react";
import s from "./aside.module.scss";
import Link from "next/link";

const Recomend = () => {
  return (
    <>
      <div className="-ml-2 -mr-2 mt-0.5">
        <Link href="#" className="flex flex-col float-left w-full ml-[0.5px] mt-2 no-underline bg-transparent rounded-2xl ">
          <div className="relative flex mx-2">
            <div className="z-0 shrink-0 w-16 m-0 overflow-hidden rounded-sm">
              <div className="relative box-border">
                <img className="top-0 left-0 w-full h-full" src="/img/Logo/CLAYMORE.webp" alt="" />
              </div>
            </div>
            <div className="flex px-3 text-sm items-center overflow-auto">
                <span>
                  Claymore sdad dsadddsaddddwere dasdwedw dsadada sdsoiewrewr
                </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="-ml-2 -mr-2 mt-0.5">
        <Link href="#" className="flex flex-col float-left w-full ml-[0.5px] mt-2 no-underline bg-transparent rounded-2xl ">
          <div className="relative flex mx-2">
            <div className="z-0 shrink-0 w-16 m-0 overflow-hidden rounded-sm">
              <div className="relative box-border">
                <img className="top-0 left-0 w-full h-full" src="/img/Logo/CLAYMORE.webp" alt="" />
              </div>
            </div>
            <div className="flex px-3 text-sm items-center overflow-auto">
                <span>
                  Claymore sdad dsadddsaddddwere dasdwedw dsadada sdsoiewrewr
                </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Recomend;
