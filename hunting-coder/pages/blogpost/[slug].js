/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import { useEffect, useState } from "react";

export default function slug() {
  const [blog, setBlog] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlog(parsed);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.heading}>{blog && blog.title}</h1>
        <hr />
        <div className={styles.center}>{blog && blog.content}</div>
      </div>
    </>
  );
}
