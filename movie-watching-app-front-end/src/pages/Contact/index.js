import styles from "./styles.module.css";
import Nav from "../../components/components/Nav";
import clsx from "clsx";
function Contact() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.nav_box}>
        <Nav name={"contact us"} />
      </div>
      <div className={styles.form_box}>
        <form action="">
          <div className={clsx(styles.form_group, styles.half)}>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className={clsx(styles.form_group, styles.half)}>
            <input type="email" name="email" id="email" placeholder="E-mail" />
          </div>
          <div className={clsx(styles.form_group, styles.half)}>
            <input type="tel" name="phone" id="phone" placeholder="Phone" />
          </div>
          <div className={clsx(styles.form_group, styles.half)}>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
            />
          </div>
          <div className={styles.form_group}>
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <div className={styles.form_group}>
            <input
              type="submit"
              name="submit"
              id="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
      <div className={styles.map_box}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0619236961!2d-74.30930662461236!3d40.69701934630478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1736150164314!5m2!1svi!2s"
            width="100%"
            height="671"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.info_container}>
          <div className={styles.info_box}>
            <div className={styles.info}>
              <div className={styles.icon_box}>
                <i class="zmdi zmdi-home"></i>
              </div>
              <div className={styles.content}>
                <p>
                  Home #02 Hangla pur <br />
                  Dhaka , Bangladesh
                </p>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.icon_box}>
                <i class="zmdi zmdi-phone"></i>
              </div>
              <div className={styles.content}>
                <p>
                  +022222222 <br />
                  +01111109999
                </p>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.icon_box}>
                <i class="zmdi zmdi-email"></i>
              </div>
              <div className={styles.content}>
                <p>
                  example@e-mail.com
                  <br />
                  example@e-mail.com
                </p>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.icon_box}>
                <i class="zmdi zmdi-globe-alt"></i>
              </div>
              <div className={styles.content}>
                <p>www.streamo.net</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
