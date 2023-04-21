/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

export default function slug() {
  const router = useRouter();

  const { slug } = router.query;
  return <div>{slug}</div>;
}
