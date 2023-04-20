import Image from "next/image";
import Head from "next/head";
import Navbar from "./Navbar";

function contact() {
  return (
    <>
      {/*   head component */}
      <Head>
        <title>Contact Page</title>
      </Head>
      <Navbar />
      <div className="navbar">
        <h1>
          hello <span>contact</span> page
        </h1>
        <Image
          src="https://static.toiimg.com/thumb/45773211/LAND-OF-THE-RISING-SUN.jpg?width=1200&height=900"
          width="500"
          height="300"
          alt=""
        ></Image>
        <p>
          This is <span>rising sun</span> pic
        </p>
        <style jsx>{`
          .navbar {
            color: yellow;
            align-items: center;
            text-align: center;
          }
          .navbar h1 {
            border: 1px solid gray;
            margin: 12px 500px;
          }
          .navbar span {
            color: orange;
            /* text-decoration: underline; */
          }
          .navbar p {
            font-size: 29px;
          }
          .navbar span {
            color: orange;
          }
        `}</style>
      </div>
    </>
  );
}

export default contact;
