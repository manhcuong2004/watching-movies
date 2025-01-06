import styles from './styles.module.css';
import clsx from 'clsx';

function Title(){
    return(
        <div className ={styles.title_container}>
            <div className={styles.title_content}>
                <h3>Latest Movies</h3>
                <div className={styles.title_arrow_box}>
                    <i className={clsx('zmdi zmdi-chevron-left', styles.arrow_icon)}></i>
                    <i className={clsx('zmdi zmdi-chevron-right', styles.arrow_icon)}></i>
                </div>
            </div>
        </div>
    )
}

export default Title