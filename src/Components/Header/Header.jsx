import React from "react";
import s from "./header.module.css";
import Button from '@mui/material/Button';
const src="https://placepic.ru/wp-content/uploads/2018/03/201408190045-more-u-ostrova-sulavesi-indoneziya-kashamalasha-com.jpg"
export default function Header({isLogin,login,outLoginThunk}) {
  return (
    <header className={s.header}>
      <img alt='#' src={src} />
      {isLogin && <span>{login}<Button onClick={outLoginThunk}  variant="contained">Out</Button></span>}
    </header>
  );
}
