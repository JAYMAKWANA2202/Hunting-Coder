import Head from "next/head";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blog(props) {
  const [blogs, setBlogs] = useState(props.allBlogs);

  // this method is using java script ?
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       console.log(parsed);
  //       setBlogs(parsed);
  //     });
  // }, []);

  return (
    <>
      <Head>
        <title>Blog Page</title>
        <link rel="icon" href="/coder.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>
          {blogs.map((blogitem) => {
            return (
              <>
                <div className={styles.detail} key={blogitem.slug}>
                  <Link href={`/blogpost/${blogitem.slug}`}>
                    <h3>{blogitem.title}</h3>
                  </Link>
                  <p className={styles.p}>
                    {blogitem.content.substr(0, 100)}...
                  </p>
                </div>
                <br />
                <hr />
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}
