import Head from "next/head";
import Link from "next/link";

import { iconStyleContact } from "../helpers/inlineStyles";
import { FaTelegramPlane } from "react-icons/fa";
import { FcCellPhone } from "react-icons/fc";

import styles from "../styles/home/Home.module.css";

export default function Custom404() {
  return (
    <dir>
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>404 - Page Not Found</h1>
        <br />
        <h3>Please check again later or contact us on the below.</h3>
        <br />
        <br />
        <br />
        <section>
          <p>
            <FcCellPhone style={iconStyleContact} />{" "}
            <a href="tel:0615250362">+27 (0)61 525 0362</a>
          </p>
          <p>
            <FcCellPhone style={iconStyleContact} />{" "}
            <a href="tel:0637281616">+27 (0)63 728 1616</a>
          </p>
          <p>
            <FaTelegramPlane style={iconStyleContact} />{" "}
            <a href="mailto:info@lesawi.co.za">info@lesawi.co.za</a>
          </p>
          <p>
            <FaTelegramPlane style={iconStyleContact} />{" "}
            <a href="mailto:boneswvb@gmail.com">boneswvb@gmail.com</a>
          </p>
        </section>
        <br />
        <br />
        <br />
        <button className={styles.button}>
          <Link href={"./"}>Back to Home page</Link>
        </button>
      </main>
    </dir>
  );
}
