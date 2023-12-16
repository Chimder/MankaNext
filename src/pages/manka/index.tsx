import { animeControllerGetUserFavorite } from "@/shared/Api/generated";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";


function MainManga() {
  const { data: session } = useSession();

  return (
    <main>
      <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
      <div>
        Not signed out <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
      <div>
        {/* {data.map((manga) => (
          <div key={manga.name}>
            <Image src={manga.img} width={1000} height={1040} alt='' />
          </div>
        ))} */}
      </div>
    </main>
  );
}

export default MainManga;