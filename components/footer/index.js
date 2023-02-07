import Image from "next/image";

import { iconStyleContact } from "../../helpers/inlineStyles.js";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FcCellPhone } from "react-icons/fc";

import styles from "./footer.module.css";

function Footer() {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: 20 }}>
      <section className="text-center">
        <span>
          <Image
            src="/images/ls.jpg"
            alt="Lesawi Logo"
            width={72}
            height={72}
          />
        </span>{" "}
        <a
          href="./"
          rel="noopener noreferrer"
          style={{ fontSize: 14, fontWeight: "bolder" }}
        >
          Developed by Wim von Benecke
        </a>
      </section>

      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h3>Interesting thought</h3>
            <p>
              You are confined only
              <br />
              by the walls you build yourself
            </p>
          </div>
          <div className="col-md-4">
            <ul className={styles.contact}>
              <li>
                <br />
                <FcCellPhone style={iconStyleContact} />{" "}
                <a href="tel:0615250362">+27 (0)61 525 0362</a>
                <br />
                <FcCellPhone style={iconStyleContact} />{" "}
                <a href="tel:0637281616">+27 (0)63 728 1616</a>
              </li>
              <li>
                <br />
                <FaTelegramPlane style={iconStyleContact} />{" "}
                <a href="mailto:info@lesawi.co.za">info@lesawi.co.za</a>
                <br />
                <FaTelegramPlane style={iconStyleContact} />{" "}
                <a href="mailto:boneswvb@gmail.com">boneswvb@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className={styles.social}>
              <li>
                <a href="https://www.facebook.com/wim.vonbenecke.9">
                  <FaFacebookF style={iconStyleContact} /> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/boneswvb">
                  <FaTwitter style={iconStyleContact} /> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/wim-von-benecke-680429135/">
                  <FaLinkedinIn style={iconStyleContact} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/wimvonbenecke/">
                  <FaInstagram style={iconStyleContact} /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container text-center">
          <p>© 2019 - 2023 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

{
  /* <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a><br> It is a long
              established fact that a <br>reader will be distracted</li>  */
}

{
  /* <!-- <h3>News letter</h3>
          <form className="news_form">
            <input className="letter_form" placeholder=" Email" type="text" name="Email">
            <button className="sumbit">Subscribe</button>
          </form> --> */
}
