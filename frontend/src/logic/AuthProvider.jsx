import { useContext, createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => { },
});

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }} />
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};