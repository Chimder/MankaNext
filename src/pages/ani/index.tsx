import { animeControllerGetAllAnime } from "@/shared/Api/generated";
import { useQuery } from "@tanstack/react-query";
import React from "react";

// const [test, setTest] = useState([]);

function MainAnime() {
  const { data } = useQuery({
    queryKey: ["anime"],
    queryFn: () => animeControllerGetAllAnime(),
  });

  if (!data) return <>loading...</>;

  console.log(data);
  return <div>index</div>;
}

export default MainAnime;
