import React from "react";
import s from "./Dialogs.module.css";
import Masseges from "./Masseges/Masseges";
import HumenMesseges from "./HumenMasseges/HumenMesseges";
import FormDialogs from './MessegeForm/MessegeForm'
import { connect } from "react-redux";
import { compose } from "redux";
import { authRedirect } from "../../../HOC/authRedirect";
import {addMessegeThunk} from "../../../redux/messegeReducer";
import { DialogsSelector, HumenSelector, isLoginSelector } from "../../../redux/Selector/usersSelector";
function Dialogs(props) {
  const arrHumen = props.humen.map((el,index) => {
    return <HumenMesseges key={index} id={el.id} name={el.name} />;
  });
  const arrMasseges = props.dialogs.map((el,index) => {
    return <Masseges key={index} masseges={el.masseges} />;
  });
  const sendMessege = (value) => {
    props.addMessegeThunk(value.massege);
    value.massege=''
  };
  return (
    <div className={s.wrapper}>
      <div className={s.humen}>{arrHumen}</div>
      <div className={s.masseges}>
        <div>
          {arrMasseges} 
        </div>  
      </div>
      <div className={s.send}>
          <FormDialogs {...props} onSubmit={sendMessege} />
       </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    dialogs: DialogsSelector(state),
    humen: HumenSelector(state),
    isLogin:isLoginSelector(state)
  };
};
export default compose(connect(mapStateToProps, {addMessegeThunk}),authRedirect)(Dialogs)