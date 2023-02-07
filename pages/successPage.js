import Head from "next/head";

import Success from "../components/success/success.js";

function successPage() {
  return (
    <div>
      <Head>
        <title>Lesawi Services - Form Submission Confirmation</title>
        <meta
          name="keywords"
          content="form submission, confirmation, Lesawi Services, free web sites, striving for excellence"
        />
        <meta
          name="description"
          content="Thank you for submitting our form. Someone will get back to you as soon as possible. Remember to ask about our free web sites available from Lesawi Services. Striving for more than just excellence."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Success />
    </div>
  );
}

export default successPage;
