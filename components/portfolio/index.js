import PortfolioImage from "./portfolio-image";

import styles from "./portfolio.module.css";

function Portfolio({ portfolioData }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className={styles.title}>
              Striving For More Than Just Excellence
            </h2>
            <p className={styles.text}>
              At Lesawi, we take pride in the diverse range of projects we have
              completed for our clients. Our services include maintenance and
              upkeep, development of new websites and applications, as well as
              redesigning current sites to give them a more modern and
              mobile-friendly look. We are dedicated to helping businesses and
              organizations achieve their goals through our superior products
              and services. If you&apos;re interested in seeing more examples of
              our work or learning more about how we can help your business
              thrive, please don&apos;t hesitate to reach out to us.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.grid}>
          <PortfolioImage portfolioData={portfolioData} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
