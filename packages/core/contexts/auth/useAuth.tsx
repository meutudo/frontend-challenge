import React, { createContext, useContext } from 'react'

export interface IUser {
    name: string
    creditValue: number
}

export interface AuthProps {
    isAuthenticated: boolean
    user: IUser
}

const AuthContext = createContext<AuthProps>(null)

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: true,
                user: { name: 'José Carlos', creditValue: 5048.1 }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}
