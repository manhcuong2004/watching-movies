import styles from "./styles.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
function LoginRegister() {
  return (
    <div className={styles.loginRegister_container}>
      <div className={styles.form_box}>
        <div className={styles.heading}>
          <Link className={styles.active}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
        <div className={styles.form}>
          <form action="">
            <div className={clsx(styles.form_group, styles.full)}>
              <input type="text" name="" id="name" placeholder="User Name" />
            </div>
            <div className={clsx(styles.form_group, styles.full)}>
              <input
                type="password"
                name=""
                id="password"
                placeholder="Password"
              />
            </div>
            <div className={styles.form_group}>
              <input type="checkbox" name="" id="remember" />
              <label for="remember">Remember me</label>
            </div>
            <div className={styles.form_group}>
              <Link>Forgot Password</Link>
            </div>
            <div className={styles.form_group}>
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginRegister;
