import AnimatedCursor from "react-animated-cursor";
import React, { useState, useEffect } from 'react';

const App = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Update the cursor position on mouse move
    const updateCursorPosition = (e) => {
        const { clientX, clientY } = e;
        const maxX = window.innerWidth - 16; // Adjust these values based on your circle size
        const maxY = window.innerHeight - 16;

        // Ensure the circle stays within the viewport bounds
        const x = Math.min(clientX, maxX);
        const y = Math.min(clientY, maxY);

        setCursorPosition({ x, y });
    };

    useEffect(() => {
        // Add a mousemove event listener to track cursor position
        document.addEventListener("mousemove", updateCursorPosition);

        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener("mousemove", updateCursorPosition);
        };
    }, []);

    return (
        <div>
            {/* Your outer circle here */}
            <div className="cursor-circle"
                style={{
                    position: 'fixed',
                    width: '16px', // Adjust the size as needed
                    height: '16px', // Adjust the size as needed
                    borderRadius: '50%',
                    border: '2px solid #193b69', // Adjust the color as needed
                    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`, // Position the circle at the cursor's position
                    transition: 'transform .4s ease-in-out', // Faster transition (adjust the duration)
                }}
            ></div>

            <AnimatedCursor
                innerSize={8}
                outerSize={8}
                color='193, 11, 111'
                outerAlpha={0.2}
                innerScale={0.9}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    {
                        target: '.custom',
                        options: {
                            innerSize: 12,
                            outerSize: 12,
                            color: '255, 255, 255',
                            outerAlpha: 0.3,
                            innerScale: 0.7,
                            outerScale: 5
                        }
                    }
                ]}
            />
        </div>
    );
}

export default App;
