import React from 'react'
import { AppRouter } from '../src/router/AppRouter';
import { AuthProvider } from './auth/AuthContext';

export const ChatApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
