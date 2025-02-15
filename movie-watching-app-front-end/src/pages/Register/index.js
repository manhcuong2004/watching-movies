import styles from "./styles.module.css";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { fetchRegister } from "../../services/register";
import { useCallback, useEffect, useRef, useState } from "react";
function LoginRegister() {
  const navigate = useNavigate();
  const [redirectToLogin, setRedirectToLogin] = useState();
  const passwordRef = useRef();
  const displaynameRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const notificationBoxRef = useRef();
  const handleRegister = useCallback(
    async (firstname, lastname, displayname, email, password) => {
      try {
        const data = await fetchRegister(
          firstname,
          lastname,
          displayname,
          email,
          password
        );

        if (!data.error) {
          setRedirectToLogin(true);
          toastElement({ status: "success" });
        } else {
          toastElement({ status: "error" });
        }
      } catch (err) {
        alert("Lỗi kết nối với server");
      }
    },
    []
  );
  useEffect(() => {
    if (redirectToLogin) {
      navigate("/login", { replace: true });
    }
  }, [redirectToLogin]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const displayname = displaynameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await handleRegister(firstname, lastname, displayname, email, password);
  };
  function toastElement({ status }) {
    const notificationBox = notificationBoxRef.current;
    if (notificationBox) {
      const toast = document.createElement("div");

      toast.classList.add(
        styles.container,
        status === "success" ? styles.success : styles.error
      );

      toast.innerHTML = `
        <div class="${styles.icon}">
          <i class="zmdi ${status === "success" ? "zmdi-check" : "zmdi-alert-circle"
        }"></i>
        </div>
        <div class="${styles.content}">
          <h3>${status === "success" ? "Đăng kí thành công" : "Đăng kí thất bại"
        }</h3>
        </div>
      `;

      notificationBox.appendChild(toast);

      // Xóa toast sau thời gian `duration`
      setTimeout(() => {
        toast.remove();
      }, 4000);
    }
  }

  const handleClick = (type) => {
    toastElement({ status: type });
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
                type="email"
                name=""
                id="email"
                placeholder="Email"
                ref={emailRef}
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
              <input type="submit" value="Register" className={styles.active} />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.notificationBox} ref={notificationBoxRef}></div>
    </div>
  );
}
export default LoginRegister;
