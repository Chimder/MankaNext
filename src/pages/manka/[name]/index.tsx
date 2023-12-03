import { useRouter } from "next/router";
import React from "react";

function AnimeName() {
  const path = useRouter();
  return <div>{path.query.name}</div>;
}

export default AnimeName;
