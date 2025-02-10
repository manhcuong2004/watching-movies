import styles from "./styles.module.css";
import Question from "../../components/components/Question";
import Nav from "../../components/components/Nav";

function FAQ() {
  return (
    <div className={styles.faq_container}>
      <div className={styles.nav_box}>
        <Nav name={"faq"} />
      </div>
      <div className={styles.question_box}>
        <div className={styles.container}>
          <Question question={"What is streamo?"} />
          <Question question={"How expensive is Streamo?"} />
          <Question question={"Can I watch with Streamo everywhere?"} />
          <Question question={"How easy is cancelling the subscription?"} />
          <Question question={"What else can I watch with Streamo?"} />
          <Question question={"How good is Streamo for kids?"} />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
