import { animeControllerGetAllAnime } from "@/shared/Api/generated";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

// const [test, setTest] = useState([]);

function MainAnime() {
  const { data: session } = useSession();
  console.log(session);
  const { data } = useQuery({
    queryKey: ["anime"],
    queryFn: () => animeControllerGetAllAnime(),
  });
  if (!data) return <>loading...</>;

  // console.log(data);
  return (
    <div>
      <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
      <div>
        Not signed out <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </div>
  );
}

export default MainAnime;
