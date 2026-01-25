import React from 'react'
import VideoSectionProjects from './VideoSectionProjects'
import SecondColumnProjects from './SecondColumnProjects'
import ThirdColumnCredits from './ThirdColumnCredits'
import projectsData from '../../../public/projects.json';

const ThreeColumnGrid = ({ projectid }: { projectid: number }) => {
    // Cast to ensure type safety if JSON import doesn't automatically infer properly, 
    // or just rely on inference.
    const projects = projectsData as any[];

    return (
        <div className="w-[90vw] h-full">
            {/* Mobile: stacked vertically, each full width */}
            {/* Large screens: side by side - first takes 2/3, other two split remaining 1/3 */}
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 h-full">
                {/* First section - 2/3 width on large screens, full width on mobile */}
                <VideoSectionProjects
                    project={projects.find(p => p.id === projectid)}
                    className='lg:col-span-2 h-full lg:min-h-0'
                />

                {/* Second section - 1/6 width on large screens, full width on mobile */}
                <SecondColumnProjects project={projects.find(p => p.id === projectid)} />

                {/* Third section - 1/6 width on large screens, full width on mobile */}
                <ThirdColumnCredits project={projects.find(p => p.id === projectid)} />
            </div>
        </div>
    )
}

export default ThreeColumnGrid
