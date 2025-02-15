import React from 'react';

import FadeInElement from '../../components/FadeInElement';
import { Link } from 'react-router-dom';

const Sponsor = () => {
    return (
        <>
        <div className="block"></div>
        <FadeInElement className="content-section">
            <h1>Sponsor</h1>
            <p>We currently have no sponsor.</p>
            <Link className="btn notebook-back" to="/notebook">Back to Notebook</Link>
        </FadeInElement>
        </>
    );
};

export default Sponsor;