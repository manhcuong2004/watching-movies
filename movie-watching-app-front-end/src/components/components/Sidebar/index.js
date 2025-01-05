import styles from './styles.module.css';
import '@mdi/font/css/materialdesignicons.min.css';
function Sidebar (){
    return (
        <div className ={styles.sidebar}>
            <div className ={styles.sidebar_container}>
                <div className ={styles.sidebar_content}>
                    <h1 className= {styles.name}>land and sea</h1>
                    <div className = {styles.box}>
                        <h3 className ={styles.genre}>romantic movie</h3>
                        <h3 className ={styles.duration}>1hr 45 minutes</h3>
                    </div>
                    <button className ={styles.sidebar_button}>watch now</button>
                </div>
                <div className={styles.sidebar_arrow}>
                    <i className="zmdi zmdi-chevron-left"></i>
                    <i className="zmdi zmdi-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
