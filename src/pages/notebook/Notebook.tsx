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
        </FadeInElement>
        <FadeInElement className="content-section">
            <h2>Contents</h2>
            <div className="contents-list">
                <div>
                    <ul>
                        <li><Link to="/notebook/summary" className="btn-link">Summary</Link></li>
                        <li><Link to="/notebook/drivetrain" className="btn-link">Drivetrain Design</Link></li>
                        <li><Link to="/notebook/code" className="btn-link">Code Development</Link></li>
                        <li><Link to="/notebook/team" className="btn-link">BIOs</Link></li>
                        <li><Link to="/notebook/sponsor" className="btn-link">Sponsor Information</Link></li>
                        <li><Link to="/notebook/outreach" className="btn-link">Outreach</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link to="/notebook/plan" className="btn-link">Plan Overview</Link></li>
                        <li><Link to="/notebook/business/goal" className="btn-link">Business Plan: Goal-Setting</Link></li>
                        <li><Link to="/notebook/business/budget" className="btn-link">Business Plan: Budget and Funding</Link></li>
                        <li><Link to="/notebook/strategy" className="btn-link">Strategy</Link></li>
                        <li><Link to="/notebook/sustainability" className="btn-link">Sustainability</Link></li>
                    </ul>
                </div>
            </div>
        </FadeInElement>
    </>)
};

export default Notebook;