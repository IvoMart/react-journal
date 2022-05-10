import React from 'react';
import {Link} from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h1 className='auth__title'>Registrarse</h1>

            <form>
                <input className='auth__input' type="text" placeholder='Nombre' name='nombre' id='nombre_'/>
                <input className='auth__input' type="email" placeholder='Apellido' name='apellido' id='apellido_'/>
                <input className='auth__input' type="password" placeholder='ejemplo@ejemplo.com' name='password' id='clave_'/>
                <input className='auth__input' type="password" placeholder='*******' name="password2" id="confirm_clave_" />

                <button className='btn btn-primary' type="submit">Ingresar</button>
                <hr />
                <div>
                    <Link to='/auth/login' className='link'>¿Ya estás registrado? Login</Link>
                </div>
            </form>
        </>
    );
};
