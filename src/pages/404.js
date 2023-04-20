import { useRouter } from "next/router";
import { useEffect } from "react";

export default function () {
  const route = useRouter();
  //   const handleclick = () => {
  //     route.push("/");
  //   };

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <h1>oops! page not found </h1>
      {/* <button onClick={handleclick}>back to home</button> */}
    </>
  );
}
