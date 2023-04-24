/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

export default function slug() {
  const router = useRouter();

  const { slug } = router.query;
  return (
    <>
      <div className={styles.main}>
        <h1> {slug}</h1>
        <hr />
        <div className={styles.center}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          inventore modi eos, molestiae consequuntur esse voluptates? Quae,
          fuga. Iste maxime sint accusamus amet sunt commodi quidem
          reprehenderit debitis aspernatur ullam.
        </div>
      </div>
    </>
  );
}
