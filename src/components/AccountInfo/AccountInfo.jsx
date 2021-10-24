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
                    <td>{userLogged.displayName}</td>
                </tr>
                <tr>
                    <td className="w-25">Email:</td>
                    <td>{userLogged.email}</td>
                </tr>
                <tr>
                    <td className="w-25">Celular:</td>
                    <td>{userLogged.phoneNumber}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}
export default AccountInfo
