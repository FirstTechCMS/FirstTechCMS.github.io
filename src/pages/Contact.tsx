import React from "react";

import FadeInElement from "../components/FadeInElement";

import './Contact.less';
import ContactList from "../components/ContactList";

const Contact = () => {
    return (<>
        <div className="block"></div>
        <FadeInElement className="content-section">
            <h1>Contact</h1>
            <p>For more information, please contact us at:</p>
            <ContactList/>
        </FadeInElement>
    </>)
};

export default Contact;