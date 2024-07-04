import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { serialize } from "cookie";
import {
  HandlerUserSwag,
  getMangaByName,
  getUserFavoriteManga,
  getUserListManga,
  getUserSession,
} from "@/shared/Api/generatedv2";
import { queryClient } from "@/pages/_app";

export function useUserSession() {
  return useQuery({
    queryKey: ["gmail_session"],
    queryFn: () => getUserSession(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 0,
  });
}

export function useUserListManga(email: string) {
  return useQuery({
    queryKey: ["user-favorite"],
    queryFn: () => getUserListManga({ email: email }),
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
}

export function useUserFavoriteManga(
  user: HandlerUserSwag | undefined,
  name: string,
) {
  return useQuery({
    queryKey: ["isFavorite"],
    queryFn: () =>
      getUserFavoriteManga({
        email: user?.email as string,
        name: name,
      }),
    enabled: !!user,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
}

export function useMangaByName(name: string) {
  return useQuery({
    queryKey: [`get-manga-by${name}`],
    queryFn: () => getMangaByName({ name: name as string }),
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
}

export function resetUserSession() {
  queryClient.refetchQueries({ queryKey: ["gmail_session"], exact: true });
}

export function resetUserSessionAndDel() {
  signOut();
  queryClient.resetQueries();
}

export const signOut = () => {
  document.cookie = "manka_google_user=; Max-Age=-1; path=/";

  // document.cookie = "manka_google_user=; Max-Age=-1; path=/; domain=yourdomain.com; SameSite=None; Secure=true";

  // Cookies.remove("manka_google_user", {
  //   path: "/",
  //   domain: "https://gotest-vtqv.onrender.com",
  //   sameSite: "None",
  //   secure: true,
  // });

  // document.cookie = serialize("manka_google_user", "", {
  //   maxAge: -1,
  //   path: "/",
  //   sameSite: "none",
  //   secure: true,
  // });
};
