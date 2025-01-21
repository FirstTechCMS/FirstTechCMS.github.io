import React from "react";

import FadeInElement from "../../components/FadeInElement";

import "./Notebook.less";
import FadeInRounded from "../../components/FadeInRounded";

const CodeDevelopment = () => {
    return (<>
        <div className="block"></div>
        <FadeInElement className="content-section">
            <h1>Code Development</h1>
            <p>Our code is written in Java. We are using the FTC SDK to control our robot.</p>
        </FadeInElement>
        <FadeInRounded className="text-left">
            <span>Hello World!</span>
        </FadeInRounded>
    </>)
};

export default CodeDevelopment;