"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
    text: string;
    className?: string;
    moveDown?: boolean;
};
export default function ScrollAnimatedText({ text, className, moveDown }: Props) {
    const ref = useRef(null);

    // Track scroll progress relative to this element
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "end start"],

        }
    )

    // Map scroll progress → animation values
    const y = useTransform(scrollYProgress, [0, 1], [100, 150]);//translate down
    const invertedY = useTransform(y, (v) => -v);
    const weight = useTransform(scrollYProgress, [0, 1, 1.5], [300, 700, 300]); // font weight
    const width = useTransform(scrollYProgress, [0, 1, 1.5], [160, 100, 85]); // font width
    const fontSize = useTransform(scrollYProgress, [0, 1], ["2.5rem", "1.8rem"]); // font size
    return (
        <div

            className={`${className} bg-red-100  w-full wrapper-h1 `}>
            {/* Big scroll space so you can see effect */}
            <motion.div

                style={{
                    y: invertedY,
                    fontVariationSettings: `"wght" ${weight}, "wdth" ${width}`,
                    fontFamily: "Geist Variable, sans-serif", // must be a variable font
                    fontSize: fontSize,
                    transformStyle: "preserve-3d",
                }}
                transition={{ duration: 10 }}
                className="text-center hero-txt"
            >
                {text}
            </motion.div>
        </div>
    );
}
