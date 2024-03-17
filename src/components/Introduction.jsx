import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import GraphemeSplitter from "grapheme-splitter";

const Introduction = ({ first, second, content }) => {
  const textRef = useRef([]);

    useEffect(() => {
        //split string into graphemes
        const stringSplitter = (string) => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
        };
        // Define a function to create typewriter instance for each paragraph
        const createTypewriter = (index) => {
        const typewriter = new Typewriter(textRef.current[index], {
            loop: false,
            delay: 20,
            stringSplitter: stringSplitter,
        });

        // Configure typewriter for the current paragraph
        typewriter.pauseFor(250).typeString(content[index]).pauseFor(100).start();

        // Return a promise that resolves when the typewriter finishes typing
        return new Promise((resolve) => {
            typewriter.callFunction(() => {
            resolve(); // Resolve the promise when typing finishes
            });
        });
        };
        // Create an array of promises for each paragraph
        const startTyping = async () => {
        for (let i = 0; i < content.length; i++) {
            await createTypewriter(i); // Wait for each typewriter to finish before starting the next one
        }
        };
        startTyping(); // Start typing the paragraphs
    }, [content]);

    return (
        <>
        <h1 className="head-text">
            {first}
            <span className="blue-gradient_text font-semibold drop-shadow">
            {second}
            </span>
        </h1>
        {/* Contents */}
        <div className="mt-5 flex flex-col gap-3 text-slate-600">
            {content.map((text, index) => (
            <p
                ref={(el) => (textRef.current[index] = el)}
                key={index}
                className="text ml-2"
            ></p>
            ))}
        </div>
        </>
    );
};

export default Introduction;
