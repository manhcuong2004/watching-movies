import styles from './styles.module.css'
import clsx from 'clsx'
import { useEffect, useState } from 'react';


function Pagination(){
    const [curPage, setCurPage] = useState('1')
    useEffect(()=>{
        const pageNav = document.querySelector(`.${styles.pageNav}`)
        const arrow_left = pageNav.querySelector('.zmdi-chevron-left')
        const arrow_right = pageNav.querySelector('.zmdi-chevron-right')
        const pageNumberList = pageNav.querySelectorAll('[data-value]')
        pageNumberList.forEach((page) =>{
            if (page.getAttribute('data-value') === curPage){
                page.classList.add(styles.active)
            }else{
                page.classList.remove(styles.active)
            }
        })
        if (curPage === '1'){
            arrow_left.classList.add(styles.hidden)
        }else{
            arrow_left.classList.remove(styles.hidden)
        }
        if(pageNumberList[pageNumberList.length - 1].getAttribute('data-value') === curPage){
            arrow_right.classList.add(styles.hidden)
        }else{
            arrow_right.classList.remove(styles.hidden)
        }
        
    }, [curPage])
    const handleClick = (e) =>{ 
        const value = e.target.getAttribute('data-value')
        if (value){
            setCurPage(value)
        }
    }
    const handelNextPage =()=>{
        setCurPage(prev => (parseInt(prev) + 1).toString())
    }
    const handelPrevPage =()=>{
        setCurPage(prev => (parseInt(prev) - 1).toString())
    }
    return(
        <div className={styles.pageNav}>
            <i className={clsx("zmdi zmdi-chevron-left")} onClick={handelPrevPage}></i>
            <div className={clsx(styles.pageNumber, styles.active)} 
                data-value="1" 
                onClick={(e)=>handleClick(e)}
            >1</div>

            <div className={clsx(styles.pageNumber)} 
                data-value="2" 
                onClick={(e)=>handleClick(e)}
            >2</div>

            <div className={clsx(styles.pageNumber)} 
                data-value="3" 
                onClick={(e)=>handleClick(e)}
            >3</div>
            <i className={clsx("zmdi zmdi-chevron-right")} onClick={handelNextPage}></i>
        </div>
    )
}

export default Pagination