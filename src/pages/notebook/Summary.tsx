import React from 'react';

import FadeInElement from '../../components/FadeInElement';

import './Notebook.less';
import { Link } from 'react-router-dom';

const Summary = () => {
    return (<>
        <div className="block"></div>
        <FadeInElement className="content-section">
            <h1>Summary</h1>
            <p>Our team is a group of students from Cambridge Maths School who are participating in the FIRST Tech Challenge. We are building a robot to compete in the 2024 to 2025 season.</p>
            <Link className="btn notebook-back" to="/notebook">Back to Notebook</Link>
        </FadeInElement>
    </>)
};

export default Summary;