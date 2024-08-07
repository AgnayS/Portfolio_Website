import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    if (isMobile) {
        return (
            <div className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}>
                <h2 className="text-white font-bold text-[32px] mb-6"> My Technical Arsenal!</h2>

                <div className='flex flex-col gap-6'>
                    {technologies.map((technology) => (
                        <div className='flex items-center' key={technology.name}>
                            <img src={technology.icon} alt={technology.name} className="w-16 h-16 mr-4" />
                            <span className="text-white text-[18px]">{technology.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <>
            <h2 className="text-white font-bold text-[32px] mb-6">My Technical Arsenal!</h2>

            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => (
                    <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");