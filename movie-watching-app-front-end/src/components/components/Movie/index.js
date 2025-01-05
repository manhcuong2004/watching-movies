import styles from './styles.module.css'

function Movie(){
    return(
        <div className ={styles.movie_container}>
            <a className ={styles.movie_box} href =''>
                <img src='https://streamo.vuejstemplate.com/images/product/horror-6.jpg' />
                <div className ={styles.movie_content}>
                    <h3 className ={styles.name}>Warm And Cozy</h3>
                    <p className ={styles.quality}>quality : hD</p>
                    <button className={styles.movie_button}>watch now</button>
                </div>
            </a>


        </div>
        
    )
}

export default Movie
