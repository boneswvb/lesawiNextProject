import { Fragment } from "react";

import Image from "next/image";

import styles from "./portfolio.module.css";

function portfolioImage({ portfolioData }) {
  const usePortfolioData = portfolioData.map((data) => {
    return (
      <div key={data.id} className={styles.card}>
        <Fragment>
          <figure className={styles.image}>
            <h2>{data.title}</h2>
            <a href={data.href} target={data.target} rel={data.rel}>
              <Image
                className={styles.picture}
                src={data.img}
                alt={data.alt}
                width={320}
                height={320}
                priority={data.priority}
              />
            </a>
          </figure>
          <br />
          <br />
          <button className={styles.button}>
            <a href={data.href} target={data.target} rel={data.rel}>
              {data.title}
            </a>
          </button>
        </Fragment>
      </div>
    );
  });

  return <Fragment>{usePortfolioData}</Fragment>;
}

export default portfolioImage;
