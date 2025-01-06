import clsx from "clsx";
import styles from './styles.module.css'

function Service(){
    return(
        <div className={styles.container}>
            <div className ={styles.price}>
                <h2>$0.00</h2>
                <h4>Free</h4>
            </div>
            <div className={styles.content}>
                <ol>
                    <li>laboris nisi ut pariatur.</li>
                    <li>Secure Service</li>
                    <li>laboris nisi ut pariatur.</li>
                    <li>70 Cup of coffee</li>
                    <li>Awesome Support</li>
                    <li>Offline Download</li>
                    <li>nam aliquam</li>
                </ol>
                <div className ={styles.button_box}>
                    <button>Choose A Plan</button>
                </div>
            </div>
        </div>
    )
}

export default Service