import styles from "./styles.module.css";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { postUserAccount } from "../../services/allService/userService"
import { useState } from "react";
function LoginRegister() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await postUserAccount({ username, email, password });

      if (data.error) {
        setError(data.error);
      } else {
        alert("Đăng ký thành công!");
        navigate("/login");
      }
    } catch (err) {
      setError("Lỗi kết nối server!");
    }
  };
  return (
    <div className={styles.loginRegister_container}>
      <div className={styles.form_box}>
        <div className={styles.heading}>
          <Link to="/login">Login</Link>
          <Link className={styles.active}>Register</Link>
        </div>
        <div className={styles.form}>
          {error && <p style={{ color: "red", margin: "10px" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className={clsx(styles.form_group, styles.full)}>
              <input
                type="text"
                name=""
                id="name"
                placeholder="User Name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={clsx(styles.form_group, styles.full)}>
              <input
                type="password"
                name=""
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={clsx(styles.form_group, styles.full)}>
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
              <input type="submit" value="Register" className={styles.active} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginRegister;
