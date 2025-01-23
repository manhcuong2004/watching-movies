import Nav from "../../components/components/Nav";
import Service from "../../components/components/Service";
import clsx from "clsx";
import styles from "./styles.module.css";

function Pricing() {
  return (
    <div className={styles.pricing_container}>
      <div className={styles.nav}>
        <Nav name ={'pricing'}/>
      </div>
      <div className={styles.service}>
        <Service />
        <Service price={100} level={"Premium"} check={true} />
        <Service price={200} level={"Standard"}/>
      </div>
    </div>
  );
}

export default Pricing;
