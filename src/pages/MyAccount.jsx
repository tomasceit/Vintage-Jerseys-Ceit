import * as React from 'react'
import { useUser } from "../context/UserContext"
import { Redirect } from "react-router-dom"

const MyAccount = () => {
    const { loggedIn, close } = useUser();
    const signOut = () => {
        close();
    }
    if (loggedIn) {
    return (
        <div className="myContainer d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between mb-1">
                <h2>MI CUENTA</h2>
                <button className="btn btn-clear" onClick={signOut}>
                    Cerrar sesion
                </button>
            </div>
            <hr />
        </div>
    )}
    else {
        return (<Redirect to="/myAccount/signIn" />);
    }
}

export default MyAccount
