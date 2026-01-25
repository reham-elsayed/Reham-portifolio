'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Project {
    id: number;
    name: string;
    excerpt: string;
    timeline: string;
    description: string;
    technologies_tools: string[];
    images: string[];
    video: string;
}

interface VideoSectionProjectsProps {
    videoSrc?: string;
    title?: string;
    description?: string;
    className?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    project?: Project;
}

const VideoSectionProjects: React.FC<VideoSectionProjectsProps> = ({
    videoSrc,
    title,
    description,
    className = '',
    autoPlay = true,
    loop = true,
    muted = true,
    project
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (isInView && autoPlay) {
                videoRef.current.play().catch((error) => {
                    console.log('Video autoplay failed:', error);
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView, autoPlay]);

    // Determine content source
    const finalVideoSrc = project?.video || videoSrc || '';


    return (
        <motion.div
            ref={containerRef}
            className={`video-section-projects ${className}`}
            style={{ opacity, scale }}
        >
            <div className="video-wrapper">
                <video
                    ref={videoRef}
                    src={finalVideoSrc}
                    loop={loop}
                    muted={muted}
                    playsInline
                    className="project-video"
                />
            </div>



            <style jsx>{`
        .video-section-projects {
          position: relative; // Changed from absolute to relative to flow correctly
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          max-width: 1200px;
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .project-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .video-content {
          margin-top: 2rem;
          text-align: center;
          max-width: 800px;
        }

        @media (max-width: 768px) {
          .video-section-projects {
            padding: 1rem;
            min-height: 300px;
          }

          .video-title {
            font-size: 1.5rem;
          }

          .video-description {
            font-size: 1rem;
          }
        }
      `}</style>
        </motion.div>
    );
};

export default VideoSectionProjects;
