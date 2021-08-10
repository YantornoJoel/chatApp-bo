import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import { AuthContext } from '../auth/AuthContext';

export const RegisterPage = () => {

    const { register } = useContext(AuthContext);

    const [form, setForm] = useState({
        name: 'Joel',
        email: 'test10@test.com',
        password: '123456',
    });

    const onChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const onSubmit = async (ev) => {
        ev.preventDefault();

        const { name, email, password } = form;
        const ok = await register(name, email, password)
        if (!ok) {
            Swal.fire('Error', 'El email ya existe, o no es válido', 'error')
        }
    }

    const todoOk = () => {
        return (
            form.email.length > 0 &&
            form.password.length > 0 &&
            form.name.length > 0
        ) ? true : false;
    }

    return (
        <form className="login100-form validate-form flex-sb flex-w" onSubmit={onSubmit}>
            <span className="login100-form-title mb-3">
                Registro
            </span>

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={onChange}
                />
                <span className="focus-input100"></span>
            </div>


            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={onChange}
                />
                <span className="focus-input100"></span>
            </div>


            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={onChange}
                />
                <span className="focus-input100"></span>
            </div>

            <div className="row mb-3">
                <div className="col text-right">
                    <Link to="/auth/login" className="txt1">
                        ¿Ya tienes cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button
                type="submit"
                    className="login100-form-btn"
                    disabled={!todoOk()}
                >
                    Crear cuenta
                </button>
            </div>

        </form>
    )
}
