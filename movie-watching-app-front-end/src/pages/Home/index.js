import Header from '../../components/components/Header'
import Sidebar from '../../components/components/Sidebar';
import Movie from '../../components/components/Movie'
import Title from '../../components/components/Title'
import Sidebar_v2 from '../../components/components/Sidebar_v2';
import styles from './styles.module.css'
import clsx from 'clsx'

function Home(){
    return(
        <div>
            <Header />
            <Sidebar /> 
            <main>
                <div className ={styles.container}>
                    <Title /> 
                    <div className={styles.box}>
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                    </div>
                </div>
                <div className ={styles.container}>
                    <Title /> 
                    <div className={styles.box}>
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                    </div>
                </div>
                <div className ={styles.container}>
                    <Title /> 
                    <div className={styles.box}>
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                    </div>
                </div>
                <div className ={clsx(styles.container, styles.sidebar)}>
                    <Sidebar/> 
                </div>
                <div className ={styles.container}>
                    <Title /> 
                    <div className={styles.box}>
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                    </div>
                </div>
                <div className ={clsx(styles.container, styles.sidebar)}>
                    <Sidebar_v2/> 
                </div>
                <div className ={styles.container}>
                    <Title /> 
                    <div className={styles.box}>
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                        <Movie /> 
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Home