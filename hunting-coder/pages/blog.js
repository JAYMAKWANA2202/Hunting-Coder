import Head from "next/head";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog Page</title>
        <link rel="icon" href="/coder.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.detail}>
            <Link href={`/blogpost/Learn-React Js`}>
              <h3>How to learn React JS in 2023?</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ipsa!
            </p>
          </div>
          <div className={styles.detail}>
            <h3>How to learn React JS in 2023?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ipsa!
            </p>
          </div>
          <div className={styles.detail}>
            <h3>How to learn React JS in 2023?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ipsa!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
