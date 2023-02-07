import styles from "./success.module.css";

function Success() {
  return (
    <div>
      <main className={styles.main}>
        <section>
          <h1>Thank you for submitting our form.</h1>
          <br />
          <br />
          <br />
          <h2>Someone will get back to you as soon as possible.</h2>
          <br />
          <br />
          <br />
          <h3>
            Free web sites are available from Lesawi Services.
            <br />
            Remember to ask about it.
          </h3>
          <br />
          <br />
          <br />
          <h4>
            <b style={{ color: "#0000ff" }}>
              <i>Striving for more than just excellence</i>
            </b>
          </h4>
          <br />
          <br />
          <br />
          <div className="text-center">
            <button className={styles.button}>
              <a href="https://www.lesawi.co.za">Back to page</a>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Success;
