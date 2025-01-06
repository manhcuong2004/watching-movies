import Nav from '../../components/components/Nav'
import Service from '../../components/components/Service'
import clsx from 'clsx'
import styles from './styles.module.css'

function Pricing(){
    return(
        <div className ={styles.pricing_container}>
            <div className={styles.nav}>
                <Nav/>
            </div>
            <div className={styles.service}>
                <Service/>
                <Service/>
                <Service/>
            </div>
        </div>
    )
}

export default Pricing