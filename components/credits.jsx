import React from "react";

const Credits = (props) => {
        return (
        <div data-section id='credits' className='group mt-32'>
            <div className='text-surface-600'>
                <div className='mb-4'>
                    This website was built and designed by Oliver Ng using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Next.js</a> and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Tailwind CSS</a>.
                </div>
                <div className='flex flex-row justify-between'>
                    <a href="/imprint" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Imprint</a>
                    <a href="/privacy" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Privacy Statement</a>
                    <span>{props.data.name} | 2025</span>
                </div>
            </div>
        </div>
    )
}

export default Credits