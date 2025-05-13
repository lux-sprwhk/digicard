import { useState } from "react";
import { ReactTyped } from "react-typed";

const normalBio = "Writer and coder making games, satire, and AI mischief.";
const matrixBio = "Welcome to the Matrix, hacker. Reality is what you make it.";

const TypewriterBio = ({ theme }) => {

    return (
        <ReactTyped strings={[theme === 'matrix' ? matrixBio : normalBio]} typeSpeed={35} showCursor={false} className="text-lg font-mono min-h-[2em] matrix:text-matrix-glow w-full" 
        />
    );

};

export default TypewriterBio;
