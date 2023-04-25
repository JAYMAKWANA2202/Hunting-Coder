import Head from "next/head";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
        <link rel="icon" href="/coder.png" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.headingh1}>About Hunting Coder</h1>
        <h2 className={styles.headingh2}>Introduction</h2>
        <p className={styles.para}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur non
          ullam laborum distinctio numquam ratione illo similique, magni autem
          beatae eius et asperiores vero a quis iure! Ipsam eos autem accusamus
          delectus quaerat odio perferendis.
        </p>
        <h2 className={styles.headingh2}>Services Offer</h2>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          corporis earum consequatur recusandae harum! Corporis ea molestias
          saepe nesciunt, earum ipsa aperiam maiores alias repellat?
        </p>
        <h2 className={styles.headingh2}>Contact Us </h2>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          corporis earum consequatur recusandae harum! Corporis ea molestias
          saepe nesciunt, earum ipsa aperiam maiores alias repellat?
        </p>
      </div>
    </>
  );
}
