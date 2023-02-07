import Home from "../components/home/home.js";

import Head from "next/head";
import styles from "../styles/home/Home.module.css";

function HomePage(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lesawi Services - Affordable Web Development Solutions</title>
        <meta
          name="keywords"
          content="web development, websites, web apps, hosting, maintenance, business solutions, affordable, Lesawi Services"
        />
        <meta
          name="description"
          content="Lesawi Services offers a wide range of web development solutions for businesses of all sizes. From free websites to web apps, hosting, and maintenance services. Contact us today to learn more about how we can help grow your business online."
        />
        <meta name="Classification" content="Business" />
        <meta name="author" content="Wim von Benecke, info@lesawi.co.za" />
        <meta name="reply-to" content="Wim von Benecke, info@lesawi.co.za" />
        <meta name="designer" content="Wim von Benecke" />
        <meta name="owner" content="Lesawi Services" />
        <meta name="url" content="http://www.lesawi.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}

export default HomePage;
