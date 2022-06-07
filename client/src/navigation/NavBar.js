import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../index';
import {getAuth} from 'firebase/auth';

export const NavBar = ({ user }) => {
    const onClickSignOut = async () => {
        getAuth(firebaseApp).signOut();
    }

    return (
        <nav>
            <Link to="/">
                <h1 className="app-heading">Photo Sharing App</h1>
            </Link>
            {user
                ? (
                <>
                    <button
                        className="sign-out-button"
                        onClick={onClickSignOut}>Sign Out</button>
                    <p
                        className="logged-in-as space-before"
                    >Logged in as {user.email}</p>
                </>
                ) : null}
        </nav>
    );
}