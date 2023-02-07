import Portfolio from "../components/portfolio/index.js";

import { getAllPortfolioItems } from "../dataFiles/portfolio";

import Head from "next/head";

import styles from "../styles/home/Home.module.css";

function PortfolioPage(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lesawi Services - Striving for More Than Just Excellence</title>
        <meta
          name="keywords"
          content="web development, maintenance, new website, redesign, mobile-friendly, Lesawi Services, business solutions, project examples, NWRNamibia, advanced forms, sossus dune lodge, Ai-Ais, Radiovision, Namibia bookings, NWR resorts, Goggaliefies, namibia wildlife resorts."
        />
        <meta
          name="description"
          content="Lesawi Services offers a diverse range of web development services, including maintenance and upkeep, new website and application development, and redesigning current sites to give them a modern and mobile-friendly look. We are dedicated to helping businesses and organizations achieve their goals."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Portfolio portfolioData={props.portfolioData} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const portfolioData = await getAllPortfolioItems();

  return {
    props: {
      portfolioData: portfolioData,
    },
    revalidate: 1800,
  };
}

export default PortfolioPage;
