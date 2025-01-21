import React from 'react';
import FadeInElement from '../../components/FadeInElement';
import { Link } from 'react-router-dom';

import './Notebook.less';

const Notebook = () => {
    return (<>
        <div className="block"></div>
        <FadeInElement className="content-section">
            <h1>Notebook</h1>
            <p>Welcome to our Engineering Notebook. Here, you can find information about our design and development.</p>
            <br />
            <div className="contents-list rounded-box flex-center">
                <h2>Contents</h2>
                <div className="contents-list-grid">
                    <Link to="/notebook/summary" className="btn-link">Summary</Link>
                    <Link to="/notebook/drivetrain" className="btn-link">Drivetrain Design</Link>
                    <Link to="/notebook/code" className="btn-link">Code Development</Link>
                    <Link to="/notebook/team" className="btn-link">Biographies</Link>
                    <Link to="/notebook/sponsor" className="btn-link">Sponsor Information</Link>
                    <Link to="/notebook/plan" className="btn-link">Plan Overview</Link>
                    <Link to="/notebook/business/goal" className="btn-link">Business Plan: Goals</Link>
                    <Link to="/notebook/business/budget" className="btn-link">Business Plan: Budget</Link>
                    <Link to="/notebook/strategy" className="btn-link">Strategy</Link>
                    <Link to="/notebook/sustainability" className="btn-link">Sustainability</Link>
                </div>
            </div>
        </FadeInElement>
    </>)
};

export default Notebook;