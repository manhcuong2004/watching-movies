import styles from "./styles.module.css";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { fetchRegister } from "../../services/register";
import { useCallback, useEffect, useRef, useState } from "react";
function LoginRegister() {
  const navigate = useNavigate();
  const [redirectToLogin, setRedirectToLogin] = useState();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const displaynameRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const handleRegister = useCallback(
    async (firstname, lastname, displayname, username, password, email) => {
      const data = await fetchRegister(
        firstname,
        lastname,
        displayname,
        username,
        password,
        email
      );

      if (data.status === "success") {
        setRedirectToLogin(true);
      } else {
      }
    },
    []
  );
  useEffect(() => {
    if (redirectToLogin) {
      navigate("/login", { replace: true });
    }
  }, [redirectToLogin]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const displayname = displaynameRef.current.value;
    const email = emailRef.current.value;

    handleRegister(firstname, lastname, displayname, username, password, email);
  };
  return (
    <div className={styles.loginRegister_container}>
      <div className={styles.form_box}>
        <div className={styles.heading}>
          <Link to="/login">Login</Link>
          <Link className={styles.active}>Register</Link>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={clsx(styles.form_group)}>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                ref={firstnameRef}
                required
              />
            </div>
            <div className={clsx(styles.form_group)}>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                ref={lastnameRef}
                required
              />
            </div>
            <div className={clsx(styles.form_group, styles.full)}>
              <input
                type="text"
                name="displayname"
                id="displayname"
                placeholder="Display Name"
                ref={displaynameRef}
                required
              />
            </div>
            <div className={clsx(styles.form_group, styles.full)}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="User Name"
                ref={usernameRef}
                required
              />
            </div>
            <div className={clsx(styles.form_group, styles.full)}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </div>
            <div className={clsx(styles.form_group, styles.full)}>
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </div>

            <div className={clsx(styles.form_group, styles.full)}>
              <input type="submit" value="Register" className={styles.active} />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.notificationBox}>
        <div className={styles.container}>
          <div className={styles.icon}>
            <i className="zmdi zmdi-check"></i>
            {/* <i className="zmdi zmdi-alert-circle"></i> */}
          </div>
          <div className={styles.content}>
            <h3>Đăng kí thành công</h3>
            {/* <h3>Đăng kí thất bại</h3> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginRegister;
