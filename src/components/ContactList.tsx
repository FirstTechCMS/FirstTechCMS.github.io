import React from "react";

import "./ContactList.less";

const ContactList = () => {
    return (
        <ul className="contact-list">
            <li><a href="https://www.instagram.com/cmsftcrobotics/" className="btn-link"><i className="fab fa-instagram"></i>&nbsp;Instagram</a></li>
            <li><a href="https://github.com/FirstTechCMS/FirstTechCMS" className="btn-link"><i className="fab fa-github"></i>&nbsp;GitHub</a></li>
        </ul>
    );
};

export default ContactList;