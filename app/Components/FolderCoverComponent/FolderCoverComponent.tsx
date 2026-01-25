import React from 'react'

const FolderCoverComponent = () => {
    return (
        <div className='relative h-dvh w-full overflow-hidden '>
            <div className='absolute inset-0  h-full w-full'>
                <div className='grid grid-cols-12 h-full w-full'>

                    <div className='col-span-1 h-full w-full grid grid-cols-2'>
                        <div className='col-span-1 bg-[var(--purple)] w-full h-full'></div>
                        <div className='col-span-1 bg-[var(--white-smoke)] w-full h-full'></div>
                    </div>
                    <div className='col-span-1 h-full w-full grid grid-cols-2'>
                        <div className='col-span-1 bg-[var(--yellow)] w-full h-full'></div>
                        <div className='col-span-1 bg-[var(--red)] w-full h-full'></div>
                    </div>
                    <div className='col-span-10 bg-[var(--purple)] w-full h-full'></div>
                </div>
            </div>
            <div className='absolute -top-[12vw] left-[40vw] w-[30vw] h-[20vw] bg-[var(--black)] polygon'></div>
        </div>
    )
}

export default FolderCoverComponent