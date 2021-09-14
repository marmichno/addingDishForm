import {Field, ErrorMessage} from 'formik';
import InputFieldCSS from './inputField.module.scss';

export const InputField = ({name, text, placeholder, type, step, options}) => {
    if(type === "select"){
        return(
            <div className={InputFieldCSS.inputContainer}>
                <label htmlFor={name}>Dish type</label>
                <div className={InputFieldCSS.inputContainer__input}>
                    <Field name={name} as={type}>
                        {options.map((val, index) => {
                            return <option key={val + index} value={val}>{val}</option>
                        })}
                    </Field>
                </div>
            </div>
        )
    }else{
        return(
            <div className={InputFieldCSS.inputContainer}>
                <label htmlFor={name}>{text}</label>
                <div className={InputFieldCSS.inputContainer__input}>
                    <Field name={name} type={type} placeholder={placeholder} autoComplete="off" step={step}/>
                </div>
                <div className={InputFieldCSS.inputContainer__error}>
                    <ErrorMessage name={name}/>
                </div>
            </div>
        )
    }
}