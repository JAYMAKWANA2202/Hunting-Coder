import Head from "next/head";
import React from "react";
import styles from "../styles/Contact.module.css";

const handleSubmit = (e) => {
  e.preventDefault();
};

export default function Contact() {
  return (
    <>
      <Head>
        <title>contact Page</title>
        <link rel="icon" href="/coder.png" />
      </Head>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>
              Enter your name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>
              Password
            </label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              id="phone"
            />
          </div>
          <label htmlFor="floatingTextarea">Comments</label>
          <div ame="form-floating">
            <textarea
              className={styles.mb3}
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
