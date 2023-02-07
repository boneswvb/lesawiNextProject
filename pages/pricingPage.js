import Pricing from "../components/pricing/index.js";

import Head from "next/head";
import styles from "../styles/home/Home.module.css";

function PricingPage(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lesawi Services - Popular Packages for Web sites prices</title>
        <meta
          name="keywords"
          content="web development, hosting, customized web design, social media links, custom emails, contact form, ongoing annual web hosting, e-commerce, LeSaWi Services, upgrade, maintenance, Google business setup"
        />
        <meta
          name="description"
          content="Lesawi Services offers a range of popular web development packages for businesses of all sizes. From hosting to customized web design, and various other services. Prices are to be used as a guide and can change depending on the customers needs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Pricing />
      </main>
    </div>
  );
}

export default PricingPage;
