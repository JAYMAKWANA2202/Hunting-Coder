import Head from "next/head";
import React from "react";
import styles from "../styles/Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, phone, email, desc);
    async function postJSON(data) {
      try {
        const response = await fetch("http://localhost:3000/api/postcontact/", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Success:", result);
        setname("");
        setemail("");
        setphone("");
        setdesc("");
      } catch (error) {
        console.error("Error:", error);
      }
    }

    const data = { name, phone, email, desc };
    postJSON(data);
  };

  const handlechange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };
  return (
    <>
      <Head>
        <title>contact Page</title>
        <link rel="icon" href="/coder.png" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>
              Enter your name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handlechange}
              name="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handlechange}
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>
              Phone:
            </label>
            <input
              type="phone"
              className="form-control"
              value={phone}
              onChange={handlechange}
              name="phone"
              id="phone"
            />
          </div>
          <label htmlFor="floatingTextarea" className={styles.formlabel}>
            Comments:
          </label>
          <div ame="form-floating">
            <textarea
              className={styles.text}
              placeholder="Leave a comment here"
              onChange={handlechange}
              value={desc}
              name="desc"
              id="floatingTextarea"
            />
          </div>

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
