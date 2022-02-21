import React from 'react'
import s from './post.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
function Post(props) {
    return (
        <div style={{margin:'1rem'}} className={s.wrapper}>
            <span style={{fontSize:'1.5rem',padding:'1rem'}}>{props.text}</span>
            <span style={{position:'relative' ,top:'0.2rem',color:'red'}}><FavoriteIcon /><span style={{position:'absolute',color:'white',left:'0.55rem',top:'-0.3rem',fontSize:'0.7rem'}}>{props.like}</span></span>
        </div>
    )
}

export default Post
