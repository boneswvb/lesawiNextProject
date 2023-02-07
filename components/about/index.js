import Link from "next/link";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h2 className={styles.title}>About Us</h2>
                <section>
                  <p>
                    LeSaWi Services aims to deliver products that is useable
                    cross platform and on all devices, on time every time.
                    Because we do our own hosting for our customers we can
                    provide free website* for start up with smaller websites and
                    charge only for the hosting{" "}
                    <strong>from as little as R 150.00 per month</strong>.
                  </p>
                  <p>
                    Lesawi is a company that provides high-quality products and
                    services to its customers. We strive to deliver the best
                    possible experience to our clients, and we are always
                    looking for new and innovative ways to improve our
                    offerings. Our team is composed of highly skilled and
                    experienced professionals who are dedicated to delivering
                    top-notch products and services to our clients.
                  </p>
                  <p>
                    Whether you need help with a specific project or are looking
                    for ongoing support, we are here to help you succeed. We
                    offer a wide range of products and services, including web
                    design and development, online marketing, and e-commerce
                    solutions. No matter what your needs are, we have the
                    expertise and resources to help you achieve your goals. If
                    you are interested in learning more about what we can do for
                    you, please don&epos;t hesitate to contact us. We would be
                    happy to discuss your needs and how we can help you succeed.
                  </p>
                </section>
                <br />
                <h2 className={styles.title}>Everything you need</h2>
                <section>
                  <p>
                    At Lesawi, we understand the importance of having a website
                    that meets the unique needs of your business and your
                    customers. That&epos;s why we offer a wide range of website
                    development services, including the creation of simple
                    pages, striking galleries, professional blogs, and online
                    stores. Our team of experts will work closely with you to
                    design a custom solution that will help your customers
                    easily navigate and engage with your website.
                  </p>
                  <p>
                    Whether you need to showcase your products and services or
                    connect with your audience, we have the skills and
                    experience to make it happen. We also recognize the
                    importance of mobile accessibility in today&epos;s digital
                    landscape. That&epos;s why we ensure that all of our
                    websites are mobile-ready right from the start, so your
                    customers can enjoy a seamless experience on any device.
                    With Lesawi, you can be confident that your website will be
                    everything you need to grow your business and connect with
                    your customers.
                  </p>
                </section>
              </div>
            </div>
          </div>
          {/* <div className="col-md-7">
            <div>
              <figure>
                <Image
                  className={styles.image}
                  width={550}
                  height={350}
                  src="/images/about_right.jpg"
                  alt="About"
                />
              </figure>
            </div>
          </div> */}
        </div>
        <div className="text-center">
          <Link className={styles.button} href="/contactPage">
            Conact us now!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
