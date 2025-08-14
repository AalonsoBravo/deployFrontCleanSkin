import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
});

export const Alta = () => {
    const navigate = useNavigate();

    return (
    <main>
    <div>
        <div className='Tittle'>
        <h1>Alta de usuarios</h1>
        </div>
        <Formik
            initialValues={{
                nombre: '',
                email: '',
                password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={ async (values, { resetForm })  => {
                //realizamos el trycatch para dar de alta
                try {
                    const response = await axios.post(`${process.env.REACT_APP_API_REGISTER_URL}`, values);
                    console.log("Usuario dado de alta:", response.data);
                    Swal.fire({
                        title: 'Éxito',
                        text: 'Usuario creado exitosamente',
                        icon: 'success',
                    });
                    resetForm();
                } catch (error) {
                    console.error("Error al dar de alta el usuario:", error);
                    Swal.fire({
                        title: 'Error',
                        text: 'No se pudo crear el usuario. Inténtalo de nuevo.',
                        icon: 'error',
                    }).then(() =>{
                        navigate('/alta'); // Redirige a la página de alta si el alta falla
                    })
                    resetForm();
                }
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="nombre" />
                    {errors.nombre && touched.nombre ? (
                        <div>{errors.nombre}</div>
                    ) : null}
                    <Field name="email" />
                    {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                    ) : null}
                    <Field name="password" type="password" />
                    {errors.password && touched.password ? <div>{errors.password}</div> : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
    </main>
    )
};

export default Alta;