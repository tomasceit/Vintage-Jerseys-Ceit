import './LogInForm.css';
import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { auth } from '../../firebase'
import { useUser } from '../../context/UserContext'

const LogInForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorLogIn, setErrorLogIn] = React.useState(false)
    const { userLogged } = useUser();
    const onSubmit = (evt) => {
        evt.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(() => { setErrorLogIn(false) })
            .catch(() => { setErrorLogIn(true) })
            .finally(() => { })
    }
    if (userLogged) {
        return <Redirect to='/myAccount' />
    } else {
        return (
            <section>
                <div className="wrap d-flex justify-content-center w-100">
                    {/* Registrarse */}
                    <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                        <div className="text w-100">
                            <h2>¡Bienvenido a VintageJerseys!</h2>
                            <p>¿Todavía no tenes una cuenta?</p>
                            <Link to="/myAccount/signUp" className="btn btn-danger">Registrate</Link>
                        </div>
                    </div>

                    {/* Iniciar sesion */}
                    <div className="login-wrap p-4 p-lg-5" style={{ width: "350px" }}>
                        <div>
                            <div className="w-100">
                                <h3 className="mb-4">Ingresar</h3>
                            </div>
                            <hr />
                        </div>
                        <form onSubmit={onSubmit} className="signin-form">
                            <div className="form-group mb-3">
                                <label className="label">Email</label>
                                <input type="email" className="form-control" placeholder="Ingrese su email" onChange={(evt) => setEmail(evt.target.value)} required />
                            </div>
                            <div className="form-group mb-3">
                                <label className="label">Contraseña</label>
                                <input type="password" className="form-control" placeholder="Ingrese su contraseña" onChange={(evt) => setPassword(evt.target.value)} required />
                            </div>
                            {errorLogIn && <div className="form-group mb-3">
                                <div className="btn-danger">Usuario o contraseña incorrectos.</div>
                            </div>
                            }
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-danger submit px-3 w-50">Iniciar sesión</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default LogInForm
