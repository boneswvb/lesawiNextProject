import Link from "next/link";

import styles from "./pricing.module.css";

function Pricing() {
  return (
    <div>
      <main className={styles.main}>
        <section>
          <h2 className={styles.title}>Popular Packages</h2>
          <br />
          <div className="text-center">
            <p>
              The prices are to be used as a guide and can change depending on
              the customers need.
            </p>
            <p>SSL certificates and domain registering to be quoted.</p>
            <p>
              <b>The below prices is for basic web sites only.</b>
              <br />
              Advanced web site will be quoted.
            </p>
          </div>
        </section>
        <div className={styles.grid}>
          <section>
            <div className={styles.card}>
              <h2 className={styles.title}>Starter Package</h2>
              <p className={styles.title}>Hosting R 150.00 per month</p>
              <p>&nbsp;</p>
              <ul>
                <li>Customized web site &ndash; up to 4 pages</li>
                <li>No upfront cost &ndash; Saving R 3 000.00</li>
                <li>Social media links</li>
                <li>Works on all platform and devices</li>
                <li>Free custom emails x 3</li>
                <li>Contact form</li>
                <li>Ongoing annual web hosting</li>
              </ul>
              <p>&nbsp;</p>
              <Link className={styles.button} href="/contactPage">
                Contact Us
              </Link>
            </div>
          </section>

          <section>
            <div className={styles.card}>
              <h2 className={styles.title}>Small Web Sites</h2>
              <p>
                <b>Hosting R 250.00 per month</b>
              </p>
              <p>&nbsp;</p>
              <ul>
                <li>Customized web site &ndash; 5 &ndash; 7 pages</li>
                <li>No upfront cost &ndash; Saving R 6 000.00</li>
                <li>Social media links</li>
                <li>Works on all platform and devices</li>
                <li>Free custom emails x 5</li>
                <li>Contact form</li>
                <li>Ongoing annual web hosting</li>
              </ul>
              <p>&nbsp;</p>
              <Link className={styles.button} href="/contactPage">
                Contact Us
              </Link>
            </div>
          </section>

          <section>
            <div className={styles.card}>
              <h3>Large Web Sites</h3>
              <p>
                <b>Hosting R 360.00 per month</b>
              </p>
              <p></p>
              <ul>
                <li>Customized web site &ndash; 8 &ndash; 10 pages</li>
                <li>No upfront cost &ndash; Saving R 14 000.00</li>
                <li>Social media links</li>
                <li>Works on all platform and devices</li>
                <li>Free custom emails x 12</li>
                <li>Contact form</li>
                <li>Ongoing annual web hosting</li>
              </ul>
              <p>&nbsp;</p>
              <Link className={styles.button} href="/contactPage">
                Contact Us
              </Link>
            </div>
          </section>

          <section>
            <div className={styles.card}>
              <h3>Business Web Sites</h3>
              <p>
                <b>Hosting R 500.00 per month</b>
              </p>
              <p>&nbsp;</p>
              <ul>
                <li>Customized web site &ndash; 11 &ndash; 16 pages</li>
                <li>No upfront cost &ndash; Saving R 20 000.00</li>
                <li>Social media links</li>
                <li>Works on all platform and devices</li>
                <li>Free custom emails x 20</li>
                <li>Contact form</li>
                <li>Order form</li>
                <li>Ongoing annual web hosting</li>
              </ul>
              <p>&nbsp;</p>
              <Link className={styles.button} href="/contactPage">
                Contact Us
              </Link>
            </div>
          </section>

          <section>
            <div className={styles.card}>
              <h3>E-commerce Web Sites</h3>
              <p>
                <b>Hosting</b>
              </p>
              <p>&nbsp;</p>
              <ul>
                <li>Will be available in 2023</li>
                <li>To be quoted</li>
              </ul>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <Link className={styles.button} href="/contactPage">
                Contact Us
              </Link>
            </div>
          </section>

          <section>
            <div className={styles.card}>
              <h3>Other Services</h3>
              <p>&nbsp;</p>
              <ul>
                <li>
                  <strong>Web site hosting</strong>
                  <br />
                  From R 150.00 per month
                </li>
                <li>
                  Upgrading of old web sites
                  <br />
                  (CSS, HTML, JavaScript, API&apos;s and databases)
                </li>
                <li>Upgrading of web apps (React &amp; Next.js)</li>
                <li>
                  Web site maintenance
                  <br />
                  (Smaller jobs @ R 175.00 per hour)
                  <br />
                  (Larger jobs to be quoted)
                </li>
                <li>Google business setup</li>
                <li>I you do not see what you need - Contact us</li>
              </ul>
              <p>&nbsp;</p>
              <Link className={styles.button} href="/contactPage">
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Pricing;
