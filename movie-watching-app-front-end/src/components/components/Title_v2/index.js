import styles from  './styles.module.css'
import clsx from 'clsx'

function Title_v2(){
    return(
        <div className={styles.title_box}>
            <h2>Land And Sea</h2>
            <div className={styles.content}>
                <p>1hr 45minutes</p>
                <p>1994-03-10</p>
                <p>Romantic</p>
                <p>U/A 18+</p>
            </div>
        </div>
    )
}

export default Title_v2