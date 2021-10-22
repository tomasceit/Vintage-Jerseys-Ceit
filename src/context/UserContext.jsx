import * as React from "react";
import { auth } from '../firebase'

const UserContext = React.createContext([]);

UserContext.displayName = "UserContext";

export const UserProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = React.useState(auth.currentUser);

    auth.onAuthStateChanged(() => {
        setLoggedIn(auth.currentUser);
    })

    const close = () => {
        auth.signOut()
            .then(() =>setLoggedIn(null))
            .catch((error) => console.error('ocurrio', error))
            .finally(() => {});
    }

    return (
        <UserContext.Provider value={{ loggedIn, close }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = React.useContext(UserContext);
    return context;
};