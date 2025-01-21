import React from 'react';

import FadeInElement from './FadeInElement';

import './FadeInRounded.less';

interface FadeInRoundedProps {
    children: React.ReactNode;
    className?: string;
}

const FadeInRounded: React.FC<FadeInRoundedProps> = ({ children, className }) => {
    return (
        <FadeInElement>
            <div className={`fade-in-rounded ${className ?? ""}`}>
            {children}
            </div>
        </FadeInElement>
    );
};

export default FadeInRounded;