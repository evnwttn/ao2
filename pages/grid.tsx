import React from "react";
import { useRouter } from "next/router";

export default function Grid() {
  const router = useRouter();
  const data = router.query;

  return <>{console.log(data)}</>;
}
