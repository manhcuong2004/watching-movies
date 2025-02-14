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
  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleLogin = useCallback(async (username, password) => {
    const data = await fetchLogin();
    if (data.token) {
      sessionStorage.setItem("token", data.token);
      setRedirectToHome(true);
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

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    handleLogin(username, password);

    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

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
                type="text"
                name=""
                id="username"
                placeholder="User Name"
                autocomplete={rememberMe ? "username" : "off"}
                ref={usernameRef}
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
      </div>
    </div>
  );
}
export default LoginRegister;
