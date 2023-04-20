import Head from "next/head";
import Navbar from "./Navbar";

export default function about() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <style jsx>{`
        h1 {
          color: orange;
          margin-top: 12px;
          align-items: center;
          text-align: center;
          font-weight: 25px;
        }
      `}</style>
      <Navbar />
      <div>
        <h1>About page</h1>
      </div>
    </>
  );
}
