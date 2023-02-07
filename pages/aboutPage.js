import About from "../components/about/index.js";

import Head from "next/head";
import styles from "../styles/home/Home.module.css";

function AboutPage(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Lesawi Services - High-Quality Web Design and Development Solutions
        </title>
        <meta
          name="keywords"
          content="web design, web development, online marketing, e-commerce, Lesawi Services, high-quality products, custom solutions, mobile-ready websites"
        />
        <meta
          name="description"
          content="LeSaWi Services offers high-quality products and services to its customers, including web design and development, online marketing, and e-commerce solutions. We strive to deliver the best possible experience to our clients, and we are always looking for new and innovative ways to improve our offerings. Contact us today to learn more about what we can do for your business."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <About />
      </main>
    </div>
  );
}

export default AboutPage;
