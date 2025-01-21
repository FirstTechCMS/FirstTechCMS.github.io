import React from "react";

import FadeInElement from "../../components/FadeInElement";

import "./Notebook.less";

const Drivetrain = () => {
    return (<>
        <div className="block"></div>
        <FadeInElement className="content-section">
            <h1>Drivetrain Design</h1>
            <p>Our drivetrain is a mecanum wheel system with four wheels. This allows us to move in any direction and rotate easily.</p>
        </FadeInElement>
    </>)
};

export default Drivetrain;