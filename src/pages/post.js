import styles from "../styles/post.module.css";
// import styles from "../../styles/post.module.css";
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
      {data.slice(0, 5).map((post) => {
        return (
          <div key={post.id} className={styles.post}>
            <Link href={`/post/${post.id}`}>
              <p className={styles.p}>{post.id}</p>
            </Link>
            <h2 className={styles.h2}>{post.title}</h2>
            <span className={styles.span}> {post.body}</span>
          </div>
        );
      })}
    </>
  );
}
