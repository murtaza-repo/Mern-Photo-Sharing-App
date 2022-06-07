import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firebaseApp } from '../index';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export const SignInPage = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [signInError, setSignInError] = useState('');
    const history = useHistory();

    const onClickSignIn = async () => {
        try {
            setSignInError('');
            await signInWithEmailAndPassword(getAuth(firebaseApp) ,emailValue, passwordValue)
            history.push('/');
        } catch (e) {
            setSignInError(e);
        }
    }

    return (
        <div className="full-height-page">
            <div className="centered-container space-before">
                <h1>Sign In</h1>
                {signInError
                    ? <div><p className="error-message">{signInError.message}</p></div>
                    : null}
                <input
                    type="text"
                    value={emailValue}
                    placeholder="Email address"
                    className="full-width space-after"
                    onChange={e => setEmailValue(e.target.value)} />
                <input
                    type="password"
                    value={passwordValue}
                    placeholder="Password"
                    className="full-width space-after"
                    onChange={e => setPasswordValue(e.target.value)} />
                <button
                    className="full-width"
                    onClick={onClickSignIn}>Sign In</button>
            </div>
        </div>
    );
}