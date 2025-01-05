import styles from './styles.module.css'

function Nav(){
    return(
        <div className={styles.container}>
            <h1 className ={styles.cur}>About</h1>
            <div className={styles.box}>
                <p className={styles.home}>Home</p>
                <p>About Us</p>
            </div>
        </div>
    )
}

export default Nav