import { ReactTyped } from "react-typed";
import { useState, useEffect } from 'react'

const normalBio = "Web dev since the Flash days, now building digital experiences and writing AI-powered fiction";
const matrixBio = "Welcome to the Matrix, hacker. Reality is what you make it.";

const TypewriterBio = ({ theme }) => {
    const [hideCursor, setHideCursor] = useState(false);

    useEffect(() => {
        setHideCursor(false);
    }, []);
    
    return (
        <span className={hideCursor ? "typed-cursor-hidden" : ""}>
            <ReactTyped
                strings={[theme === 'matrix' ? matrixBio : normalBio]}
                typeSpeed={45}
                showCursor={true}
                className="text-lg font-mono min-h-[2em] matrix:text-matrix-glow w-full"
                onComplete={() => setHideCursor(true)}
            />
        </span>
    );

};

export default TypewriterBio;
