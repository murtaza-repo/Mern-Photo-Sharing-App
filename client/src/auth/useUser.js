import { useState, useEffect } from 'react';
import { firebaseApp } from '../index';
import {getAuth} from 'firebase/auth';

export const useUser = () => {
    const [userInfo, setUserInfo] = useState(() => {
        const user = getAuth(firebaseApp).currentUser;
        const isLoading = !user;
        return { isLoading, user };
    });

    useEffect(() => {
        return getAuth(firebaseApp).onAuthStateChanged(user => {
            setUserInfo({ isLoading: false, user });
        });
    }, []);

    return userInfo;
}