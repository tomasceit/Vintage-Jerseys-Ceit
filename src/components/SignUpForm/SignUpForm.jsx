import * as React from 'react';
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const onSubmit = (evt) => {
        evt.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => { alert('User created successfully') })
            .catch(() => { console.error('failed') })
            .finally(() => { console.log('Termino el proceso') })
    }

    return (
        <div className="myContainer">
            <form onSubmit={onSubmit} className="d-flex flex-column align-items-center">
                <fieldset>
                    <legend className="mb-3">Datos personales</legend>
                    <hr />
                    <div className="d-flex align-items-center">
                        <label htmlFor="fullName">Nombres y Apellido:</label>
                        <input type="text" id="fullName" name="fullName" required />
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={(evt) => setEmail(evt.target.value)} required />
                    </div>
                    <div className="d-flex mt-3">
                        <label htmlFor="phone">Contraseña:</label>
                        <div>
                            <input type="password" id="password" name="password" className="w-100" onChange={(evt) => setPassword(evt.target.value)} required />
                            <div className="form-text">La contraseña debe tener 6 caracteres como minimo.</div>
                        </div>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-danger mt-3" style={{ width: "180px", height: "3rem", fontSize: "1.5rem" }}>
                    REGISTRARSE
                </button>
            </form>
            <Link to="/MyAccount/signIn" className="d-flex justify-content-center mt-3">Ya tengo cuenta</Link>
        </div>
    )
}

export default SignUpForm
