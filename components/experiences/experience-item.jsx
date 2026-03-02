import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 rounded-2xl border border-transparent transition-all duration-300 bg-background hover:bg-primary-500/10 hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/10">
            <div className="basis-1/4 mr-2">
                <Image src={props.logo} alt="Company Logo" width={70} height={70} className='object-contain object-top pt-2' />
            </div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.title} | {props.company} </a>
                <div className='mb-2 text-surface-600'>{props.startDate} - {props.endDate}</div>
                <div className='text-surface-600 mb-4'>
                    {Array.isArray(props.description) ? (
                        <ul className="list-disc list-inside space-y-1">
                            {props.description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{props.description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem