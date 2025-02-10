import styles from './styles.module.css'

function Person(){
    return(
        <div className ={styles.person_container}>
            <div className={styles.imgBox}>
                <img src ='https://streamo.vuejstemplate.com/images/team/team-01.png'/>
                <ul>
                    <li><i class="zmdi zmdi-facebook"></i></li>
                    <li><i class="zmdi zmdi-twitter"></i></li>
                    <li><i class="zmdi zmdi-linkedin"></i></li>
                    <li><i class="zmdi zmdi-instagram"></i></li>
                </ul>
            </div>
            <div className={styles.content}>
                <h4>Reza Karim</h4>
                <p>Programer</p>
            </div>
        </div>
    )
}

export default Person