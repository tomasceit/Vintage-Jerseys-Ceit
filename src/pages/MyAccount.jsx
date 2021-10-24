import * as React from 'react'
import { useUser } from "../context/UserContext"
import { Redirect } from "react-router-dom"
import SearchOrder from '../components/SearchOrder/SearchOrder'
import AccountInfo from '../components/AccountInfo/AccountInfo'

const MyAccount = () => {
    const { userLogged, close } = useUser();
    const signOut = () => {
        close();
    }
    const [state, setState] = React.useState(false)

    if (userLogged) {
        return (
            <>
                <div className="myContainer d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <h2>MI CUENTA</h2>
                        <button className="btn btn-clear" onClick={signOut}>
                            Cerrar sesion
                        </button>
                    </div>
                    <hr />
                    <div className="d-flex column">
                        <ul className="account">
                            <li className={!state ? 'red' : undefined} onClick={() => setState(false)}>Datos personales</li>
                            <li className={state ? 'red' : undefined} onClick={() => setState(true)}>Mis pedidos</li>
                        </ul>
                        <div style={{width:'75%'}}>
                            {state ? <SearchOrder /> : <AccountInfo />}
                        </div>
                        
                    </div>

                    
                </div>
            </>)
    }
    else {
        return (<Redirect to="/myAccount/signIn" />);
    }
}

export default MyAccount
