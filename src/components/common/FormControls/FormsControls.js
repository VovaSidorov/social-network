import React from "react";
import styles from "./formsControl.module.css"
import {Field} from "redux-form";
import {requireField} from "../../../utils/validators/validators";


// export const Textarea = ({input,meta,...props})=>{
//     const hasError = meta.touched && meta.error;
//
//     return (
//         <div className={styles.formControl+' '+(hasError ? styles.error : " ")}>
//             <div>
//             <textarea {...input} {...props}/>
//             </div>
//             <div>
//                 {hasError && <span className={styles.formControl + ' ' + styles.error}>{meta.error}</span>}
//             </div>
//         </div>
//     )
// }

const  FormControl = ({input,meta:{touched,error},children})=>{
    const hasError = touched && error;
    return (
        <div className={styles.formControl+' '+(hasError ? styles.error : " ")}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span className={styles.formControl + ' ' + styles.error}>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) =>{
    const {input,meta,child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) =>{
    const {input,meta,child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)
