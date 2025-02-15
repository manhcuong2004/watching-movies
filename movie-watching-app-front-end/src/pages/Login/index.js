import styles from "./styles.module.css";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin } from "../../services/login";
import { useCallback, useEffect, useRef, useState } from "react";
function LoginRegister() {
  const [rememberMe, setRememberMe] = useState();
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [check, setCheck] = useState();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const notificationBoxRef = useRef();
  const handleLogin = useCallback(async (email, password) => {
    try {
      const data = await fetchLogin(email, password);
      if (!data.error) {
        setRedirectToHome(true);
      } else {
        toastElement({ status: "error" });
      }
    } catch (err) {
      // alert(err);
    }
  }, []);
  useEffect(() => {
    if (redirectToHome) {
      navigate("/home", { replace: true });
    }
  }, [redirectToHome]);
  const handleSubmit = (e) => {
    e.preventDefault();

    setCheck(false);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    handleLogin(email, password);

    emailRef.current.value = "";
    passwordRef.current.value = "";
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
          <i class="zmdi ${
            status === "success" ? "zmdi-check" : "zmdi-alert-circle"
          }"></i>
        </div>
        <div class="${styles.content}">
          <h3>${
            status === "success" ? "Đăng nhập thành công" : "Đăng nhập thất bại"
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

  return (
    <div className={styles.loginRegister_container}>
      <div className={styles.form_box}>
        <div className={styles.heading}>
          <Link className={styles.active}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={clsx(styles.form_group, styles.full)}>
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email"
                autocomplete={rememberMe ? "email" : "off"}
                ref={emailRef}
                required
              />
            </div>
            <div className={clsx(styles.form_group, styles.full)}>
              <input
                type={check ? "text" : "password"}
                name=""
                id="password"
                placeholder="Password"
                autocomplete={rememberMe ? "current-password" : "off"}
                ref={passwordRef}
                required
              />
              <div className={styles.eyeBox} onClick={() => setCheck(!check)}>
                <i
                  className="zmdi zmdi-eye"
                  style={{ display: check ? "none" : "block" }}
                ></i>
                <i
                  className="zmdi zmdi-eye-off"
                  style={{ display: check ? "block" : "none" }}
                ></i>
              </div>
            </div>
            <div className={styles.form_group}>
              <input
                type="checkbox"
                name=""
                id="remember"
                onChange={() => setRememberMe(!rememberMe)}
              />
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
        <div className={styles.notificationBox} ref={notificationBoxRef}></div>
      </div>
    </div>
  );
}
export default LoginRegister;
