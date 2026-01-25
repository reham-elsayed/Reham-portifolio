import React from 'react';

const ThirdColumnCredits = ({ project }: { project: any }) => {
    if (!project) return null;

    return (
        <div className="lg:col-span-1 bg-[#e5e2d6] h-full lg:min-h-0 flex flex-col rounded-lg overflow-hidden">
            {/* Wrapper with custom scrollbar */}
            <div className="custom-scrollbar flex-grow overflow-y-auto p-4 relative">

                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 relative">
                        <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/641f54e2f2602aa480da3629/655f68fbad4e2b17a6c59495_logo_creatives.svg"
                            alt="Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="text-sm font-bold text-[#4f52be]">
                        {project.timeline}
                    </div>
                </div>

                <div className="hidden">
                    2022
                </div>
                <div className="text-xs text-gray-500 mb-4 font-mono">
                    {/* Optional: Add year if needed, or remove if timeline covers it */}
                </div>

                <div>
                    <div className="text-[#292f33] text-sm leading-relaxed">
                        <div className="flex flex-col gap-1">
                            {project.technologies_tools && project.technologies_tools.map((tech: string, index: number) => (
                                <span key={index} className="block">
                                    <span className="font-bold">Tech {index + 1}:</span> {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="">{project.description}
                </div>

                <style jsx>{`
                /*width*/
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }

                /*track*/
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                    border-color: transparent;
                }

                /*thumb*/
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(41, 47, 51, 0.4);
                    border-radius: 6px;
                }

                /*thumb*/
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(41, 47, 51, 0.6);
                }
            `}</style>
            </div>
        </div>
    );
};

export default ThirdColumnCredits;
