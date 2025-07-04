import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all hover:bg-surface-200">
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
                <div className="flex flex-row flex-wrap gap-2 mt-4">
                    {props.skills ? props.skills.map((skill) => (
                        <div key={skill} className="bg-surface-400 py-1 px-3 rounded-full text-xs mr-2 whitespace-nowrap">{skill}</div>
                    )) : ""}
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem