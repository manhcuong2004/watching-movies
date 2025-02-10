import styles from './styles.module.css'
import clsx from 'clsx'
import Nav from '../../components/components/Nav'
import Movie from '../../components/components/Movie'
function MyProfile(){
    return(
        <div className ={styles.myprofile_container}>
            <div className ={styles.nav_box}>
                <Nav name ={'profile'}/>
            </div>
            <div className = {styles.main}>
                <div className={styles.aside}>
                    <div className ={styles.person_container}>
                        <div className={styles.imgBox}>
                            <img src ='https://streamo.vuejstemplate.com/images/team/team-01.png'/>
                        </div>
                        <div className={styles.info}>
                            <h5>Marl Joni</h5>
                            <p>Video maker, Designer</p>
                        </div>
                        <div className={styles.icon}>
                            <ol>
                                <li><i class="zmdi zmdi-facebook"></i></li>
                                <li><i class="zmdi zmdi-twitter"></i></li>
                                <li><i class="zmdi zmdi-linkedin"></i></li>
                                <li><i class="zmdi zmdi-instagram"></i></li>
                            </ol>
                        </div>
                        <div className={styles.content}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores debitis voluptatum, illo, beatae reiciendis accusamus vel repudiandae laudantium officiis velit impedit blanditiis, natus aspernatur! Autem sed fuga nam nisi recusandae
                        </div>
                    </div>
                </div>
                <div className={styles.article}>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                </div>
            </div>
        </div>
    )
}

export default MyProfile