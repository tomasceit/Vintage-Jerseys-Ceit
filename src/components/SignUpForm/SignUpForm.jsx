import * as React from 'react';
import './SignUpForm.css';
import { auth } from '../../firebase'
import { Link, Redirect } from 'react-router-dom'

const SignUpForm = () => {
    const [email, setEmail] = React.useState('');
    const [state, setState] = React.useState(false)
    const [phone, setPhone] = React.useState(0);
    const [password, setPassword] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const onSubmit = (evt) => {
        evt.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                auth.currentUser.updateProfile({
                    displayName: fullName,
                    phoneNumber: phone
                }).then(() => { console.log('Updated profile') })
            })
            .catch(() => { console.error('failed') })
            .finally(() => { setState(true) })
    }

    if (state) {
       return <Redirect to='/' />
    } else {
    return (
        <div className="myContainer">
            <form onSubmit={onSubmit} className="d-flex flex-column align-items-center">
                <fieldset>
                    <legend className="mb-3">Datos personales</legend>
                    <hr />
                    <div className="d-flex align-items-center">
                        <label htmlFor="fullName">Nombres y Apellido:</label>
                        <input type="text" id="fullName" name="fullName" onChange={(evt) => setFullName(evt.target.value)} required />
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        <label htmlFor="phone">Celular:</label>
                        <input type="tel" id="phone" name="phone" onChange={(evt) => setPhone(evt.target.value)} required />
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
                <button type="submit" className="btn btn-danger mt-3 registratration-btn">
                    REGISTRARSE
                </button>
            </form>
            <Link to="/MyAccount/signIn" className="d-flex justify-content-center mt-3">Ya tengo cuenta</Link>
        </div>
    ) }
}

export default SignUpForm
