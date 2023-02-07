import { iconStyle, iconStyleContact } from "../../helpers/inlineStyles.js";

import { FaTelegramPlane } from "react-icons/fa";
import { FcCellPhone } from "react-icons/fc";

import styles from "./contact.module.css";

function Contact() {
  return (
    <div>
      <main className={styles.main}>
        <section className="text-center">
          <h2>Request A Call Back</h2>
          <p>
            Please complete the form below with a details description of your
            inquiry.
            <br />
            We will call you back as soon as possible.
          </p>
        </section>
        <section className="text-center">
          <form
            method="POST"
            action="/components/contact/form.php"
            id="request"
            className={styles.form}
          >
            <section>
              <input
                placeholder="Full Name"
                type="input"
                name="name"
                id="name"
              />
            </section>
            <section>
              <input placeholder="Email" type="email" name="email" id="email" />
            </section>
            <section>
              <input
                placeholder="Phone Number"
                type="tel"
                name="phone"
                id="phone"
              />
            </section>
            <section>
              <input
                name="message"
                placeholder="Message"
                type="text"
                id="message"
              />
            </section>
            <section>
              <button>Send</button>
            </section>
          </form>
        </section>
        <br />

        <section className={styles.contact}>
          <ul className={styles.contact}>
            <li>
              <p>
                <FcCellPhone style={iconStyleContact} />{" "}
                <a href="tel:0615250362">+27 (0)61 525 0362</a>
              </p>
            </li>
            <li>
              <p>
                <FcCellPhone style={iconStyleContact} />{" "}
                <a href="tel:0637281616">+27 (0)63 728 1616</a>
              </p>
            </li>
            <li>
              <p>
                <FaTelegramPlane style={iconStyleContact} />{" "}
                <a href="mailto:info@lesawi.co.za">info@lesawi.co.za</a>
              </p>
            </li>
            <li>
              <p>
                <FaTelegramPlane style={iconStyleContact} />{" "}
                <a href="mailto:boneswvb@gmail.com">boneswvb@gmail.com</a>
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Contact;
