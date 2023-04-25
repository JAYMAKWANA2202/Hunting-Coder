/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import { useEffect, useState } from "react";
import * as fs from "fs";

export default function Slug(props) {
  const [blog, setBlog] = useState(props.myBlog);

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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-javaScript" } },
      { params: { slug: "how-to-learn-nextjs" } },
      { params: { slug: "how-to-learn-Reactjs" } },
    ],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log("context: ", context);
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}
