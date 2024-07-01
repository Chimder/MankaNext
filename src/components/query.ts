import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { getUserSession } from "@/shared/Api/generatedv2";
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

export function resetUserSession() {
  queryClient.refetchQueries({ queryKey: ["gmail_session"], exact: true });
}

export function resetUserSessionAndDel() {
  signOut();
  queryClient.resetQueries()
}

export const signOut = () => {
   Cookies.remove("manka_google_user", { path: "/", sameSite: "None", secure: true });
};
