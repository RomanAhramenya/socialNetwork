import React from 'react'
import s from './masseges.module.css'
function Masseges(props) {
    return (
        <div className={s.wrapper}>
            <span>{props.masseges}</span>
        </div>
    )
}
export default Masseges
