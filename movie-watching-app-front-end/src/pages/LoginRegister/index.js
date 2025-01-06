import styles from './styles.module.css'
import clsx from 'clsx'
import Nav from '../../components/components/Nav'

function LoginRegister(){
    return(
        <div className ={styles.loginRegister_container}>
            <div className={styles.nav_box}>
                <Nav/>
            </div>
            <div className={styles.form_box}>
                <div className={styles.heading}>
                    <a href ='' className={styles.active}>Login</a>
                    <a href=''>Register</a>
                </div>
                <div className={styles.form}>
                    <form action="">
                        <div className={clsx(styles.form_group, styles.full)}>
                            <input type="text" name="" id="name" placeholder="User Name"/>
                        </div>
                        <div className={clsx(styles.form_group, styles.full)}>
                            <input type="password" name="" id="password" placeholder="Password"/>
                        </div>
                        <div className={styles.form_group}>
                            <input type="checkbox" name="" id="remember"/>
                            <label for="remember">Remember me</label>
                        </div>
                        <div className={styles.form_group}>
                            <a href="">Forgot Password</a>
                        </div>
                        <div className={styles.form_group}>
                            <input type="submit" value="Login"/>
                            <input type="submit" value="Register"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginRegister
