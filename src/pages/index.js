import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <style jsx>{`
        h1 {
          color: orange;
          margin-top: 12px;
          align-items: center;
          text-align: center;
        }
      `}</style>
      <Head>Home Page</Head>

      <h1>Welcome to home page</h1>
    </>
  );
}
