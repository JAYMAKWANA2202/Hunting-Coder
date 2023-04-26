/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="nextjs , huntingcoder blog , hunting coder, blogs"
        />
        <link rel="icon" href="/coder.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>
          <h1>
            <span>Hunting Coder</span>
          </h1>
          <img src="/home_pic.avif" alt="Hunting coder" />
          <p></p>
        </div>

        <div className={styles.content}>
          <h2>Latest Blog:</h2>
          <div className={styles.deatil}>
            <h3>How to learn JavaScript in 2023?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ipsa!
            </p>
          </div>
          <div className={styles.deatil}>
            <h3>How to learn React JS in 2023?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ipsa!
            </p>
          </div>
          <Link href={"/blog"}>
            <button className={styles.btn}> Read More Blogs</button>
          </Link>
        </div>
      </main>
    </>
  );
}
