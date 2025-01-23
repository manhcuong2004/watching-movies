import styles from './styles.module.css'
import clsx from 'clsx'
import { useState } from "react";

function Question(data){
    const [isExpanded, setIsExpanded] = useState(false);
    const handleCLick = ()=>{
        setIsExpanded(!isExpanded)
    }
    
    return(
        <div className={styles.question_container}>
            <div className={clsx(styles.question, {
                [styles.active]: true ? isExpanded: false
            })}
                onClick = {(event) => {handleCLick(event)}}
            >
                <span>{data.question ? data.question : 'What is streamo?'}</span>
                <i class="zmdi zmdi-chevron-up"></i>
            </div>
            <div className={clsx(styles.extend, {
                [styles.hidden]: true ? !isExpanded: false
            })}>
                {data.more ? data.more : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            </div>
        </div>
    )
}

export default Question