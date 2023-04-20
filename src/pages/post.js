import styles from "../styles/post.module.css";

import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function index({ data }) {
  return (
    <>
      {data.slice(0, 20).map((post) => {
        return (
          <div key={post.id} className={styles.post}>
            <p className={styles.p}>{post.id}</p>
            <Link href={`/posts/${post.id}`}>
              <h2 className={styles.h2}>{post.title}</h2>
            </Link>
          </div>
        );
      })}
      <Link href={`/posts/post1`}>
        <button>go to next</button>
      </Link>
    </>
  );
}
