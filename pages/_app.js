import Head from "next/head";
import Script from "next/script";

import Header from "../components/header/index.js";
import Nav from "../components/nav/index.js";
import Footer from "../components/footer/index.js";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Lesawi Services - Affordable Web Development Solutions and More
        </title>
        <meta
          name="description"
          content="Lesawi Services offers a wide range of web development solutions for businesses of all sizes. From free websites to web apps, hosting, redesigning, maintenance, and more. We strive to deliver the best possible experience to our clients. Contact us today to learn more about our popular packages, pricing, and how we can help your business thrive."
        />
        <meta
          name="keywords"
          content="Meta Keywords: web development, websites, web apps, hosting, maintenance, redesigning, business solutions, affordable, Lesawi Services, popular packages, pricing, mobile-ready websites, high-quality products, custom solutions, project examples, NWRNamibia, advanced forms, sossus dune lodge, Ai-Ais, Radiovision, Namibia bookings, NWR resorts, Goggaliefies, namibia wildlife resorts, e-commerce, upgrade, Google business setup, form submission, confirmation, free web sites, striving for excellence"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
      />
      <Nav />
      <hr />
      <br />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
