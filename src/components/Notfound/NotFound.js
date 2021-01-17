import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

const NotFound = () =>{
    return (
        <div className="NotFound">
             <h1 className="NotFound-title">
              Oops we heave a problem
             </h1>
             <Link className="NotFound-link" to="/">Go to Home page</Link>
        </div>
    )
}

export default NotFound;