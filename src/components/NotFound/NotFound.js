import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/outline'

const NotFound = () => {
    return (
        <div className='container d-flex align-items-center justify-content-center' style={{height:"80vh"}}>
            <div>
                <EmojiSadIcon style={{width:"200px"}}></EmojiSadIcon>
                <h2 className='display-4 fw-bold'>404</h2>
                <h3>Page not found</h3>
            </div>
        </div>
    );
};

export default NotFound;