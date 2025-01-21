import React from 'react';

import FadeInElement from '../components/FadeInElement.tsx';

import './home.less';
import ContactList from '../components/ContactList.tsx';

const Home = () => {
    return (
        <div>
            <FadeInElement className="hero">
                <h1>Welcome to the CRAB Robotics Team</h1>
                <p>The FIRST Tech Challenge team at Cambridge Maths School.</p>
                <a href="#about" className="btn">Learn More</a>
            </FadeInElement>
            <FadeInElement id="about" className="content-section">
                <h2>About Us</h2>
                <p>We are a UK-based team of students representing <a href="https://cms.tela.org.uk/" className="btn-link">Cambridge
                    Maths School</a> in the 2024 to 2025 <a href="https://firstuk.org/" className="btn-link">FIRST Tech Challenge</a>.
                </p>
                <p>CRAB stands for Cambridge maths school Robotics Autonomous Build.</p>
            </FadeInElement>

            <FadeInElement id="support" className="content-section highlight-section">
                <h2>Support</h2>
                <p>We would greatly appreciate any donations to help us fund our robot and competition costs.</p>
                <p>Funds will be used to purchase materials, tools, and transportation.</p>
                <a href="https://gofund.me/d45aa2a3" className="btn">Donate</a>
            </FadeInElement>

            <FadeInElement id="team" className="team-section content-section">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <h3>Louise</h3>
                        <p>Team Leader</p>
                    </div>
                    <div className="team-member">
                        <h3>Erik</h3>
                        <p>Lead Programmer</p>
                    </div>
                    <div className="team-member">
                        <h3>Timur</h3>
                        <p>Programmer</p>
                    </div>
                    <div className="team-member">
                        <h3>Rayyan</h3>
                        <p>Programmer</p>
                    </div>
                    <div className="team-member">
                        <h3>Vedant</h3>
                        <p>Design and CAD</p>
                    </div>
                    <div className="team-member">
                        <h3>Robert</h3>
                        <p>Design and CAD</p>
                    </div>
                    <div className="team-member">
                        <h3>James</h3>
                        <p>Lead Enginner</p>
                    </div>
                    <div className="team-member">
                        <h3>Hester</h3>
                        <p>Engineer</p>
                    </div>
                    <div className="team-member">
                        <h3>Ewan</h3>
                        <p>Engineer</p>
                    </div>
                    <div className="team-member">
                        <h3>Ivan</h3>
                        <p>Engineer</p>
                    </div>
                    <div className="team-member">
                        <h3>Sadhbh</h3>
                        <p>Engineer</p>
                    </div>
                    <div className="team-member">
                        <h3>Oren</h3>
                        <p>Community Lead</p>
                    </div>
                </div>
            </FadeInElement>
            <FadeInElement id="contact" className="content-section">
                <h2>Contact</h2>
                <p>Interested in collaborating? Reach out to us!</p>
                <ContactList/>
            </FadeInElement>
        </div>
    )
};

export default Home;