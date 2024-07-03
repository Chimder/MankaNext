import { useMutation } from "@tanstack/react-query";
import { toggleFavoriteManga } from "../Api/generatedv2";
import { queryClient } from "@/pages/_app";

export function useToggleFavoriteManga() {
  return useMutation({
    mutationFn: async ({ email, name }: { email: string; name: string }) =>
      await toggleFavoriteManga({
        email,
        name,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["isFavorite"] });
    },
  });
}
