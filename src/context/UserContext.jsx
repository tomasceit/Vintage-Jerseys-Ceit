import * as React from "react";
import { auth } from '../firebase'

const UserContext = React.createContext([]);

UserContext.displayName = "UserContext";

export const UserProvider = ({ children }) => {
    const [userLogged, setuserLogged] = React.useState(auth.currentUser);

    auth.onAuthStateChanged(() => {
        setuserLogged(auth.currentUser);
    })

    const close = () => {
        auth.signOut()
            .then(() =>setuserLogged(null))
            .catch((error) => console.error('ocurrio', error))
            .finally(() => {});
    }

    return (
        <UserContext.Provider value={{ userLogged, close }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = React.useContext(UserContext);
    return context;
};