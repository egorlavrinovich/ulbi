import { SerializedError } from '@reduxjs/toolkit';

export interface LoginSchema {
    userName?: string,
    userPassword?: string,
    isLoading: boolean,
    error?: string | SerializedError
}

export interface AuthUser {
    id: string,
    userName?: string,
    userPassword?: string,
}
