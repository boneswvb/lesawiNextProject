import Contact from "../components/contact/index.js";

import Head from "next/head";
import styles from "../styles/home/Home.module.css";

function ContactPage(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Request A Call Back - Lesawi Services</title>
        <meta
          name="keywords"
          content="request a call back, Lesawi Services, inquiry, contact, phone, email"
        />
        <meta
          name="description"
          content="Request a call back from Lesawi Services. Complete the form below with your inquiry and we will call you back as soon as possible. Contact us at +27 (0)61 525 0362 or +27 (0)63 728 1616, or via email at info@lesawi.co.za or boneswvb@gmail.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Contact />
      </main>
    </div>
  );
}

export default ContactPage;
