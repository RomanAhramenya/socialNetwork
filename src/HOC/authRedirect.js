import React from "react"
import { Route, Routes} from 'react-router-dom'
import Login from "../Components/Content/Login/Login"
export const authRedirect=(Component)=>{
    let redirectComponent=(props)=>{
        if (!props.isLogin){
            return  (
                 <Routes>
            <Route path="/" element={<Login  isLogin={props.isLogin} authLoginThunk={props.authLoginThunk} />} />
        </Routes>
            )
           
        }

        return <Component {...props}/>
    }
    return redirectComponent
}