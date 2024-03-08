import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

import { CreateUser } from "../../services/user_service";
import Loader from "../loader/Loader";
import { Notification } from "../../services/tostifyNot";

import '../registroUsuario/UserRegister.css';

const UserRegister = () => {

  const [ loading, setLoading ] = useState(true)
  const navigate = useNavigate();

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <>
    {
      loading ? (<Loader/>) : (<Formik
        initialValues={{
          email: "",
          password: "",
          repeatPassword: "",
          urlPhoto: "",
        }}
        validate={(values) => {
          let errors = {};
          
          // Validación input email
          if(!values.email) {
            errors.email = 'Por favor ingrese una direccion de mail';
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = 'Esa no es una direccion de email valida';
          }
  
          //Validación input password
          if(!values.password) {
            errors.password = 'Por favor ingrese una contraseña'
          } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(values.password)) {
            errors.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número';
          }
  
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          if(values.password !== values.repeatPassword) {
            console.log('Las contraseñas no coinciden');
            Notification({ message: "Tus contraseñas no coincide", type: "error" });
            //mostrar un aviso cuando las contraseñas no coinciden
            setSubmitting(false);
            return;
          }
          CreateUser({
            email: values.email,
            password: values.password,
          })
          .then(Response => {
            Notification({ message: "Usuario creado con exito, ahora debes iniciar sesión" , type: "success" });
            navigate("/");
            // Realizar acciones adicionales despues de crear el usuario
          })
          .catch(error => {
            console.log('Error al crear el usuario:', error);
            Notification({ message: `${error}`, type: "error" });
          })
          .finally(() =>{
            setSubmitting(false);
          });
        }}
      >
        {({ isSubmitting, isValid, errors }) => (
          <section className='section-register section'>
            <div className='container-register container grid'>
             <div className="wrapper">
             <Form>
                <div className='boxTitleRegister'>
                  <h3>Registro de usuario.</h3>
                </div>
                <label htmlFor='email' className='boxInput'>Ingrese su email
                  <Field className='campo' type="email" name="email" />
                  <ErrorMessage 
                    name='email' 
                    component={() => (
                      <div className='error'>{errors.email}</div>
                    )}
                  />
                  </label>
                  <label htmlFor="password" className="boxInput">Ingrese su contraseña
                  <Field className='campo' type="password" name="password" />
                  <ErrorMessage 
                    name='password' 
                    component={() => (
                      <div className='error'>{errors.password}</div>
                    )} 
                  />
                  </label>
                  <label htmlFor="repeatPassword" className="boxInput">Repita su contraseña
                  <Field
                    className='campo'
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                  />
                  <ErrorMessage name="repeatPassword" component="div" />
                  </label>
                <button className='btn1 btn-register' type="submit" disabled={isSubmitting || !isValid}>
                  Crear Usuario
                </button>
              </Form>
             </div>
            </div>
          </section>
        )}
      </Formik>)
    }
    </>
  );
};

export default UserRegister;