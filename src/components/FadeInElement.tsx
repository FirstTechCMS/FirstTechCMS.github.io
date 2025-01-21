import React, { useEffect, useRef } from 'react';
import './FadeInElement.css';

interface FadeInElementProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const FadeInElement: React.FC<FadeInElementProps> = ({ id, children, className }) => {
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        observer.observe(domRef.current!);

        return () => observer.disconnect();
    }, []);

    return (
        <div id={id} className={`fade-in ${className ?? ""}`} ref={domRef}>
            {children}
        </div>
    );
};

export default FadeInElement;