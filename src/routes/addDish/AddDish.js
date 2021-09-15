import {Formik, Form, Field, ErrorMessage} from 'formik';
import {validationSchema} from './validationSchema/validationSchema';
import { postNewDish } from './requests/postNewDish';
import AddDishCSS from '../addDish/addDish.module.scss';
import { InputField } from './components/inputField/InputField';
import {useState} from 'react';

export const AddDish = () => {

    const [httpResponse, setHttpResponse] = useState("");

    return(
        <div className={AddDishCSS.mainContainer}>
            <Formik initialValues={{
                name: '',
                preparation_time: '',
                type: 'pizza',
                no_of_slices: '',
                diameter: '',
                spiciness_scale: '',
                slices_of_bread: ''
            }}
            validationSchema={validationSchema}
            onSubmit={async(data) =>{
                const response = await postNewDish(data);
                setHttpResponse(response);
            }}
            >
                {({values}) =>(
                    <div className={AddDishCSS.mainContainer__contentContainer}>
                        <div className={AddDishCSS.mainContainer__contentContainer__imgContainer}></div>
                            <div className={AddDishCSS.mainContainer__contentContainer__addDishContainer}>
                                <div className={AddDishCSS.mainContainer__contentContainer__addDishContainer__headerContainer}>
                                    <h2>Add new dish</h2>
                                </div>
                                <Form className={AddDishCSS.mainContainer__contentContainer__addDishContainer__formContainer}>
                                    <InputField name="name" text="Dish name" placeholder="margharita" type="input"/>
                                    <InputField name="preparation_time" text="Preparation time" placeholder="01:30:00" type="input"/>
                                    <InputField name="type" type="select" options={["pizza", "soup", "sandwich"]}/>
                                    {values.type === "pizza" && (
                                        <>
                                            <InputField name="no_of_slices" text="Number of slices" placeholder="1" type="number"/>
                                            <InputField name="diameter" text="Diameter" placeholder="15" type="number" step="0.1"/>
                                        </>
                                    )}
                                    {values.type === "soup" && (
                                        <InputField name="spiciness_scale" text="Spiciness scale" placeholder="1-10" type="number"/>
                                    )}
                                    {values.type === "sandwich" && (
                                        <InputField name="slices_of_bread" text="Slices of bread" placeholder="3" type="number"/>
                                    )}
                                        <div className={AddDishCSS.mainContainer__contentContainer__addDishContainer__formContainer__submitContainer}>
                                            {httpResponse === "Dish added succesfully" ? 
                                            <p style={{color:"green"}}>{httpResponse}</p> 
                                            : 
                                            <p style={{color:"red"}}>{httpResponse}</p>}
                                            <button type="submit">Add dish</button>
                                        </div>
                                </Form>
                            </div>
                        </div>
                )}
            </Formik>
        </div>
    )
}