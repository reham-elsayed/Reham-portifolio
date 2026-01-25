import Image from 'next/image';
import React from 'react';

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

interface SecondColumnProjectsProps {
    project?: Project;
}

const SecondColumnProjects: React.FC<SecondColumnProjectsProps> = ({ project }) => {
    if (!project) {
        return (
            <div className='flex flex-col justify-center items-center h-full bg-[#e5e2d6] rounded-lg p-6'>
                <p>No project data available.</p>
            </div>
        );
    }

    const { name, excerpt, description, images } = project;
    const [image1, image2, image3, image4] = images || [];

    return (
        <div className='flex flex-col justify-between gap-4 lg:col-span-1 bg-[#e5e2d6] rounded-lg p-4 h-full lg:min-h-0 overflow-hidden'>
            {/* Main Image */}
            <div className='relative w-full h-[180px] lg:h-[200px] shrink-0 rounded-md overflow-hidden'>
                {image1 ? (
                    <Image src={image1} alt={name} fill className='object-cover hover:scale-110 transition-transform duration-500' />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                )}
            </div>

            <div className="flex-grow flex flex-col justify-center py-2">
                <h2 className="text-xl lg:text-2xl font-bold text-[#4f52be] leading-tight mb-1">{name}</h2>
                <p className="text-sm font-medium text-gray-600 mb-2">{excerpt}</p>
                <p className="text-xs lg:text-sm text-[#292f33] line-clamp-3 lg:line-clamp-4">{description}</p>
            </div>

            {/* Grid Images */}
            <div className='grid grid-cols-2 h-[120px] lg:h-[140px] gap-2 shrink-0'>
                <div className='relative h-full w-full rounded-md overflow-hidden'>
                    {image2 ? (
                        <Image src={image2} alt={`${name} detail 1`} fill className='object-cover hover:scale-110 transition-transform duration-500' />
                    ) : (
                        <div className="w-full h-full bg-gray-200" />
                    )}
                </div>
                <div className='flex flex-col gap-2 h-full w-full'>
                    <div className='relative h-[calc(50%-4px)] w-full rounded-md overflow-hidden'>
                        {image3 ? (
                            <Image src={image3} alt={`${name} detail 2`} fill className='object-cover hover:scale-110 transition-transform duration-500' />
                        ) : (
                            <div className="w-full h-full bg-gray-200" />
                        )}
                    </div>
                    <div className='relative h-[calc(50%-4px)] w-full rounded-md overflow-hidden'>
                        {image4 ? (
                            <Image src={image4} alt={`${name} detail 3`} fill className='object-cover hover:scale-110 transition-transform duration-500' />
                        ) : (
                            <div className="w-full h-full bg-gray-200" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondColumnProjects;
