"use client";

import React, { useState } from "react";


interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    squares?: [number, number]; // [horizontal, vertical]
    className?: string;
    squaresClassName?: string;
}

export function InteractiveGridPattern({
    width = 40,
    height = 40,
    squares = [24, 24],
    className,
    squaresClassName,
    ...props
}: InteractiveGridPatternProps) {
    const [horizontal, vertical] = squares;
    const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

    return (
        <svg
            width={width * horizontal}
            height={height * vertical}
            className={`absolute inset-0 h-full w-full border border-gray-800/30 ${className}`}
            {...props}
        >
        {Array.from({ length: horizontal * vertical }).map((_, index) => {
            const x = (index % horizontal) * width;
            const y = Math.floor(index / horizontal) * height;
            return (
            <rect
                key={index}
                x={x}
                y={y}
                width={width}
                height={height}
                className={
                    `stroke-gray-300/30
                    fill-transparent
                    transition-all
                    duration-200 ease-in-out
                    hover:fill-gray-600/30
                    ${squaresClassName ?? ""}`
                    // `stroke-gray-400/30 transition-all ease-in-out
                    // duration-150 hover:duration-500
                    // ${hoveredSquare === index ? "fill-gray-300/30" : "fill-transparent"}
                    // ${squaresClassName ?? ""}`
                }
                // onMouseEnter={() => setHoveredSquare(index)}
                // onMouseLeave={() => setHoveredSquare(null)}
            />
            );
        })}
        </svg>
    )
}

export type {InteractiveGridPatternProps}