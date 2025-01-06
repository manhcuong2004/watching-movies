import styles from './styles.module.css'
import Question from '../../components/components/Question'
import Nav from '../../components/components/Nav'

function FAQ(){
    return(
        <div className ={styles.faq_container}>
            <div className={styles.nav_box}>
                <Nav/>
            </div>
            <div className={styles.question_box}>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
            </div>
        </div>
    )
}

export default FAQ