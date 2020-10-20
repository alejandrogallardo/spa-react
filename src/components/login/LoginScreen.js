import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const [formValues, handleInputChange] = useForm({
        username: ''
    });
    const {username} = formValues;
    // console.log(username);

    const {dispatch} = useContext(AuthContext);
    
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(formValues);
        // console.log('Holis');
        // history.push('/');
        // history.replace('/');

        if (username === ''){
            // console.log('Debes ingresar un nombre');
            // isName = true
            let obj = document.getElementById('validacion');
            obj.classList.add('d-block');
        }else {

            const lastPath = localStorage.getItem('localPath') || '/';

            dispatch({
                type: types.login,
                payload: {
                    // name: 'Alejandro'
                    name: username
                }
            }) 
            // history.replace('/');
            history.replace(lastPath);
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Login</h1>
            <hr />

            <div className="row d-flex justify-content-center">
                <div className="col-sm-8">
                    <form onSubmit={handleLogin}>

                        <div className="form-group">
                            <label>Usuario:</label>
                            <input 
                                type="text"
                                className="form-control"
                                name="username"
                                autoComplete="off"
                                value={username}
                                onChange={handleInputChange}
                            />
                             
                            <span id="validacion" className="text-danger d-none"><small>Se requiere que ingreses algun nombre</small></span>
                              
                        </div>
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input 
                                className="form-control"
                                type="password"
                                disabled    
                            />
                        </div>
                        <button
                            className="btn btn-success btn-block"
                            // onClick={handleLogin}
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center">Pagina demo con React, solo debes ingresar un nombre y dar login</p>
                </div>
            </div>
           
        </div>
    )
}
