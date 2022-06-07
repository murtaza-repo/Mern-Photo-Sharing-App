import React from 'react';
import { Link } from 'react-router-dom';

export const NewPhotoButton = () => (
    <Link className='link' to={'/upload-photo'}>
        <div className='new-photo-button'>
            <p className='plug-sign'>
                +
            </p>
        </div>
    </Link>
)