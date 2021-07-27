import { createContext } from "react";

const AuthContext = createContext({
    auth: undifined,
    login: () => null,
    logout: () => null,
    setReloadUser: () => null
});

export default AuthContext;