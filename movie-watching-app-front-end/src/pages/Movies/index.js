import Sidebar from "../../components/components/Sidebar";
import Movie from "../../components/components/Movie";
import styles from './styles.module.css'
import Pagination from "../../components/components/Pagination";

function Movies(){
    const movieCount = 12;
    return(
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.content_container}>    
                <div className={styles.box}>
                    {Array.from({ length: movieCount }, (_, i) => (
                        <Movie key={i} />
                    ))}
                </div>
                <Pagination/>
                
            </div>
        </div>
        
    )
}

export default Movies