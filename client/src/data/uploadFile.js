import { firebaseApp } from '../index';
import {getAuth} from 'firebase/auth';

export const uploadFile = async (url, formData) => {
    const user = getAuth(firebaseApp).currentUser;
    if(!user) {
        console.log("Error! Unauthorized request...");
        return null;
    }

    const response = await fetch(url, {
        method: 'post',
        body: formData,
        headers: {
            AuthToken: await user.getIdToken()
        }
    });

    return response;
}
