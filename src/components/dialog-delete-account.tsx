import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteUser } from "@/shared/Api/generatedv2";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useMutation } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { resetUserSession, useUserSession } from "../shared/hooks/query";

export function DialogDemo({ children }: PropsWithChildren) {
  const { data: user } = useUserSession();

  const {
    mutate: DeleteUser,
    isSuccess,
    isPending,
  } = useMutation({
    mutationKey: ["deleteUser"],
    mutationFn: () => deleteUser({ email: user?.email as string }),
    onSuccess: () => resetUserSession(),
  });
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="z-1000 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Are you sure you want to irrevocably delete the account
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {isSuccess ? (
            <Button className="bg-green-600 text-white" type="submit">
              Success
            </Button>
          ) : (
            <>
              <Button
                onClick={() => DeleteUser()}
                className="text-white"
                type="submit"
              >
                Delete
                {isPending && (
                  <ReloadIcon className="ml-1 h-4 w-4 animate-spin" />
                )}
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
