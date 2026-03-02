import React from "react";

function EducationItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 rounded-2xl border border-transparent transition-all duration-300 bg-background hover:bg-primary-500/10 hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/10">
            <div className='mr-2 text-surface-600 text-xs basis-1/4'>
                {props.startDate} {checkEndDate(props)}
            </div>
            <div className='basis-3/4'>
                <span className='font-medium transition-all group-hover:text-primary-300'>{props.university}</span>
                <div className='text-surface-600 mb-1'>
                    {props.degree}{props.subject ? `, ${props.subject}` : ""}
                </div>
            </div>
        </div>
    )
}

function checkEndDate(props) {
    if (!props.endDate) {
        return '';
    } else {
        return ('- ' + props.endDate); 
    }  
}

export default EducationItem