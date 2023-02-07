import Image from "next/image";
import Link from "next/link";

import styles from "./home.module.css";

function home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.grid}>
          <section>
            <h1 className={styles.title}>Welcome to Lesawi!</h1>
            <p>
              At Lesawi Services are delighted to welcome you to our website. As
              a web development company, we are dedicated to providing our
              clients with exceptional services and solutions. We are committed
              to delivering results that exceed our clients expectations.
              Whether you require a new website, an overhaul of your existing
              site, or any other web-related services, we have the expertise to
              deliver.{" "}
            </p>
            <p>
              To further support our clients, Lesawi Services is proud to offer
              a range of <strong>free web sites and web apps</strong>. These
              user-friendly and feature-rich products are available at no cost
              to you and are perfect for small to medium businesses,
              organizations, and individuals who are looking to establish an
              online presence without incurring any upfront costs.
            </p>
            <p>
              Our free web sites are fully customizable, allowing you to add
              your own content and branding to create a unique and professional
              website. In addition, <strong>we offer free web apps</strong> that
              are designed to streamline your business processes and improve
              efficiency. These range from project management tools to customer
              relationship management systems, tracking, booking and so much
              more and are easy to use and require no technical knowledge to set
              up and use.
            </p>
            <p>
              We also offer web <strong>hosting packages</strong> starting from
              as low as R150.00 per month. we developed a range of hosting
              packages to suit a variety of needs, whether you are a small
              business, organization, or individual. Our hosting packages
              include everything you need to get your website up and running,
              including a domain name, custom email addresses, storage space,
              and bandwidth. We use top-of-the-line servers to ensure that your
              website is fast, secure, and always available.
            </p>
            <p>
              For our clients in need of reliable and efficient{" "}
              <strong>web maintenance</strong> services, Lesawi Services is here
              to help. We offer both remote and on-site web maintenance services
              to ensure that your website runs smoothly and efficiently. We are
              equipped to handle a range of tasks, including updates, backups,
              and performance improvements.
            </p>
            <p>
              We believe in the{" "}
              <strong>power of collaboration and partnership</strong>. We work
              closely with our clients to understand their unique needs and
              goals, and we tailor our approach to fit their specific
              requirements. This allows us to deliver customized solutions that
              deliver maximum value and achieve real results.
            </p>
            <p>
              So if you are ready to take your business to the next level, we
              encourage you to contact us today. We would be happy to discuss
              your needs and how we can help you succeed in the digital world.
              So, don&apos;t wait any longer, get in touch with us today and
              let&apos;s get started!
            </p>
            <div className="text-center">
              <Link className={styles.button} href="/contactPage">
                Conact us now!
              </Link>
            </div>
          </section>

          <div className={styles.card}>
            {/* <figure>
              <Image
                className={styles.image}
                width={550}
                height={360}
                src="/images/software_img.jpg"
                alt="software"
              />
            </figure> */}
            <h2 className={styles.title}>World Wide Web (WWW)</h2>
            <p>
              The World Wide Web (WWW) was created in 1989 by Tim Berners-Lee
              while working at CERN. It was a system for sharing and linking
              information on the internet, and the first website was hosted on a
              NeXT computer. Mosaic, the first graphical web browser, was
              released in 1993 making it more accessible.
            </p>
            <p>
              The Web continued to evolve in the early 2000s with the
              introduction of social media platforms such as Facebook, Twitter,
              and YouTube. The Web is now an integral part of daily life for
              many people, but also has its challenges such as privacy concerns,
              misinformation, and cybercrime.
              <br />
              <br />
              New technologies are expected to continue to shape the future of
              the Web.
            </p>
            <br />
            <Link className={styles.button} href="/contactPage">
              More Info
            </Link>
          </div>

          <div className={styles.card}>
            <h2 className={styles.title}>Website affordability </h2>
            <p>
              At LeSaWi Services, we believe that a website should be affordable
              for all businesses. That&apos;s why we offer free websites for our
              clients. Your website is the online storefront for your customers
              and it should not come at a high cost. We understand the
              importance of a website in today&apos;s digital age and how it can
              increase your profits and market share. We offer a wide range of
              services to help maximize your profits and take your business to
              the next level, without breaking the bank. Our web sites packages
              start from as little as R 150.00 per month with no upfront cost,
              or for a one-time fee of <br />R 3 000.00 (Terms and conditions
              apply). At LeSaWi Services, we are dedicated to providing our
              clients with affordable and top-quality web development solutions.
              Contact us today to learn more about how we can help grow your
              business online.
            </p>
            <br />
            <Link className={styles.button} href="/pricingPage">
              More Info
            </Link>
          </div>

          <div className={styles.card}>
            <h2 className={styles.title}>Pricing</h2>
            <p>
              Web sites and apps from as little as R 150.00 per month
              <br />
              <strong>Or</strong>
              <br />
              From as little as R 3000-00 for a web site or app
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <Link className={styles.button} href="/pricingPage">
              More Info
            </Link>
          </div>

          <div className={styles.card}>
            <h2 className={styles.title}>Hosting</h2>
            <ul>
              <li>
                <p>From as little as R 150.00 per month;</p>
              </li>
              <li>
                <p>3 free custome email addreses</p>
              </li>
              <li>
                <p>From as little R 100.00 per year for domain registration</p>
              </li>
              <li>
                <p>SSL certificate and more</p>
              </li>
            </ul>

            <br />
            <Link className={styles.button} href="/pricingPage">
              More Info
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default home;
