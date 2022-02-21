import React from 'react'
import s from './Preloader.module.css'
import CircularProgress from '@mui/material/CircularProgress';
export default function Preloader() {
    return (
        <div className={s.wraper}>
            <CircularProgress color="success" />
        </div>
    )
}
