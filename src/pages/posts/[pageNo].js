import styles from "../../styles/post.module.css";
import Link from "next/link";
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { pageNo: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

function myData({ data }) {
  return (
    <>
      <div key={data.id} className={styles.post}>
        <p className={styles.p}>{data.id}</p>
        <h2 className={styles.h2}>{data.title}</h2>
        <span className={styles.span}> {data.body}</span>
      </div>
      <div className={styles.button}>
        <Link href="/post">
          <button>go to back</button>
        </Link>
      </div>
    </>
  );
}

export default myData;
