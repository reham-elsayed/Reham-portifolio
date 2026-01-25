"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function FloatingWhatsAppAvatar() {
    const [isHovered, setIsHovered] = useState(false);

    const handleAvatarClick = () => {
        const phoneNumber = "+201091132456";
        // Use the translation function to get the message
        const message = " Contact Reham";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="fixed bottom-8 right-8 z-50 flex items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            className="mr-4 px-4 py-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-zinc-900 dark:text-zinc-100 text-sm font-semibold whitespace-nowrap origin-right"
                        >
                            Contact via WhatsApp
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        scale: { duration: 0.2 },
                    }}
                    onClick={handleAvatarClick}
                    className="relative cursor-pointer"
                >
                    {/* Avatar */}
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                            rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                            filter: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                        }}
                        whileHover={{ filter: "drop-shadow(0 0 8px rgba(37, 99, 235, 0.8))" }}
                    >
                        <Image src="/phone.png" alt="WhatsApp" width={80} height={80} priority />
                    </motion.div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}