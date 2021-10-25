import * as React from 'react'
import { useUser } from "../../context/UserContext"
import './AccountInfo.css'

const AccountInfo = () => {
    const { userLogged } = useUser();
    return (
        <>
            <h3>Mis datos</h3>
            <hr />
            <table id="accountInfo" className="table">
                <tbody>
                    <tr>
                        <td className="w-25">Apellido y nombres:</td>
                        <td>{userLogged.displayName ? userLogged.displayName : 'No tenemos esta informacion disponible'}</td>
                    </tr>
                    <tr>
                        <td className="w-25">Email:</td>
                        <td>{userLogged.email ? userLogged.email : 'No tenemos esta informacion disponible'}</td>
                    </tr>
                    <tr>
                        <td className="w-25">Celular:</td>
                        <td>{userLogged.photoURL ? userLogged.photoURL : 'No tenemos esta informacion disponible'}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default AccountInfo
