import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { loginApi } from "../../../api/user";
import useAuth from "../../../hooks/useAuth";

export default function LoginForm(props) {

    const { showRegisterForm, onCloseModal } = props; 
    const [loading, setLoading] = useState(false);
    const auth = useAuth();

    const formik = useFormik({
        initialValues: initialValues(FormData),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async(formData) => {
            setLoading(true);
            const response = await loginApi(formData);

            if (response?.jwt) {
                console.log("Login OK");
                onCloseModal();
            } else {
                toast.error("El correo electrónico y/o la contraseña son incorrectos.");
            }
            setLoading(false);
        }
    });

    return (
        <Form className = "login-form" onSubmit = {formik.handleSubmit}>
            <Form.Input name = "identifier" type = "text" placeholder = "Correo electrónico" onChange = {formik.handleChange} error = {formik.errors.identifier}/>
            <Form.Input name = "password" type = "password" placeholder = "Contraseña" onChange = {formik.handleChange} error = {formik.errors.password}/>

            <div className = "actions">
                <Button type = "button" basic onClick = {showRegisterForm}>Registrarse</Button>
                <div>
                    <Button type = "button">¿Has olvidado la contraseña?</Button>
                    <Button className = "submit" type = "submit" loading = {loading}>Entrar</Button>
                </div>
            </div>
        </Form>
    )
}

function initialValues() {
    return {
        identifier: "",
        password: ""
    }
}

function validationSchema() {
    return {
        identifier: Yup.string().email(true).required(true),
        password: Yup.string().required(true)
    }
}
