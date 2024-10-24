import Link from "next/link";
import React from "react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  HeartFilledIcon,
} from "@radix-ui/react-icons";
import { ThemeToggle } from "./ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DialogDemo } from "./dialog-delete-account";
import { resetUserSessionAndDel, useUserSession } from "../shared/hooks/query";

const redirect_uri = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL_ADDRES}/google/auth`;
export const GoogleLoginURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=code&scope=openid%20profile%20email&access_type=offline&prompt=consent`;

function AsideBar() {
  const { data: user } = useUserSession();

  return (
    <div className="nav_bar_container">
      <nav className="z-100 flex w-full justify-evenly">
        <Link className="flex items-center justify-center" href="/">
          ❄️
        </Link>

        <div className="w-18 -ml-2 flex justify-between rounded-xl bg-background/10 py-1 pl-0 pr-4 backdrop-blur-sm ">
          <Link className="nav_btn" href="/">
            Manga
          </Link>
          <Link
            className="flex items-center justify-end rounded-xl bg-background/20 px-3.5 py-1 hover:bg-background/40"
            href="/manka/search"
          >
            <MagnifyingGlassIcon className="h-6 w-6 fill-current text-white" />
          </Link>
        </div>
        {user && (
          <Link className=" nav_btn group h-10 w-10" href="/favorite">
            <HeartIcon className="h-10 w-10 fill-current text-primary group-hover:hidden" />
            <HeartFilledIcon className="hidden h-10 w-10 fill-current text-primary group-hover:block" />
            <div></div>
          </Link>
        )}

        <div className="nav_icon">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img className="z-999 w-6" src={user.image} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col">
                <Button
                  onClick={() => resetUserSessionAndDel()}
                  className="my-1 text-white"
                >
                  LogOut
                </Button>
                <DialogDemo>
                  <Button className="my-1 bg-red-600 text-white hover:bg-red-600/80">
                    Delete Account
                  </Button>
                </DialogDemo>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href={GoogleLoginURL}>user</Link>
          )}
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
}

export default AsideBar;
