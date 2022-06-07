import { firebaseApp } from '../index';
import {getAuth} from 'firebase/auth';

export const postWithCredentials = async (url, bodyData) => {
    const user = getAuth(firebaseApp).currentUser;

    if (!user) {
        console.log("Error: trying to make an authed requests while not logged in");
        return [];
    }

    const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify(bodyData),
        headers: {
            AuthToken: await user.getIdToken(),
            'Content-Type': 'application/json',
        },
    });

    return response;
}