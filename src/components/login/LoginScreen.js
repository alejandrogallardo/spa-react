import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        // console.log('Holis');
        // history.push('/');
        // history.replace('/');
        dispatch({
            type: types.login,
            payload: {
                name: 'Alejandro'
            }
        }) 
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Login</h1>
            <hr />

            <div className="row d-flex justify-content-center">
                <div className="col-md-4 col-sm-12">
                    <form>
                        <div className="form-group">
                            <label>Usuario:</label>
                            <input className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input className="form-control"/>
                        </div>
                    </form>
                    <button
                        className="btn btn-success btn-block"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
           
        </div>
    )
}
