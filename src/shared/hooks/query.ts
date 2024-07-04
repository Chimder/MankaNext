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
import axios from "axios";

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

export async function resetUserSessionAndDel() {
  await signOut();
  queryClient.resetQueries();
}

export const signOut = async () => {
  try {
    await axios.post("/api/delete-cookie");
  } catch (error) {
    console.error("Error deleting cookie:", error);
  }
};
