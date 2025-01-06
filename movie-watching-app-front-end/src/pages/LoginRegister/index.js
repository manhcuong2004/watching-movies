import styles from './styles.module.css'
import clsx from 'clsx'
import Nav from '../../components/components/Nav'
import {useState} from 'react'
function LoginRegister(){
    const [islogin, setIsLogin] = useState(true)
    const handleClick= (e)=>{
        e.preventDefault()
        setIsLogin(!islogin)
    }
    return(
        <div className ={styles.loginRegister_container}>
            <div className={styles.nav_box}>
                <Nav/>
            </div>
            <div className={styles.form_box}>
                <div className={styles.heading}>
                    <a href ='' className={islogin ? styles.active : ''} onClick={handleClick}>Login</a>
                    <a href='' className={!islogin ? styles.active : ''} onClick={handleClick}>Register</a>
                </div>
                <div className={styles.form}>
                    <form action="">
                        <div className={clsx(styles.form_group, styles.full)}>
                            <input type="text" name="" id="name" placeholder="User Name"/>
                        </div>
                        <div className={clsx(styles.form_group, styles.full)}>
                            <input type="password" name="" id="password" placeholder="Password"/>
                        </div>
                        <div className={clsx(styles.form_group, styles.full, !islogin ? styles.active : '')}>
                            <input type="email" name="" id="email" placeholder="Email"/>
                        </div>
                        <div className={styles.form_group}>
                            <input type="checkbox" name="" id="remember"/>
                            <label for="remember">Remember me</label>
                        </div>
                        <div className={styles.form_group}>
                            <a href="" onClick={handleClick}>Forgot Password</a>
                        </div>
                        <div className={styles.form_group}>
                            <input type="submit" value="Login"className={islogin ? styles.active : ''}/>
                            <input type="submit" value="Register" className={!islogin ? styles.active : ''}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginRegister
