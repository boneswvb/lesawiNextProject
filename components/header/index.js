import Image from "next/image";
import Link from "next/link";

import { iconStyle, iconStyleContact } from "../../helpers/inlineStyles.js";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FcCellPhone } from "react-icons/fc";

import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.banner}>
      <article className={styles.bannerArt}>
        <section className={styles.center}>
          <Link className="navbar-brand" href="./">
            <Image
              className={styles.logo}
              src="/images/ls.jpg"
              alt="Logo"
              width="90"
              height="90"
            />
          </Link>
        </section>

        <section className={styles.center}>
          <h1 className={styles.compName}>LeSaWi Services</h1>
        </section>
        <br />

        <section>
          <ul className={styles.social}>
            <li>
              <a href="https://www.facebook.com/wim.vonbenecke.9">
                <FaFacebookF style={iconStyle} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/boneswvb">
                <FaTwitter style={iconStyle} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/wim-von-benecke-680429135/">
                <FaLinkedinIn style={iconStyle} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/wimvonbenecke/">
                <FaInstagram style={iconStyle} />
              </a>
            </li>
          </ul>
        </section>

        <br />
        <br />
        <br />

        <section>
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
      </article>
    </div>
  );
}

export default Header;

{
  /* <i class="fa fa-instagram" aria-hidden="true"></i> */
}
