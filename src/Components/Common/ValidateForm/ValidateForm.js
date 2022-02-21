import TextField from '@mui/material/TextField';
import { Field } from 'redux-form';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
export const requiredField=value => value ? undefined : 'Required'
export const renderField=({input,label,type,meta:{touched,error}})=>{
    return(
       <div style={{margin:'1vw',display:'block',position:'relative'}}>
       <TextField  {...input} label={label} type={type} variant="outlined" />
        {touched&&error&&
        <span style={{
            position:'absolute',
            top:'1.1rem',
            right:'0.5rem',
            color:'red',
            fontSize:'0.8rem'}}>
        {error}</span>}
       </div>    
    )}
export const radioButton=({input,label,type,meta:{touched,error,warning}})=>{
    return(
        <div style={{margin:'1vw 1vw 0'}}>
       <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
        </div>
         )}
export const createField=(name,label,type,component,validate,props)=>{
    return <Field name={name} label={label} type={type}  component={component} validate={validate} {...props}/>
}
