
import React from 'react'

export const EducationCard = ({education}) => {
    return (
        <div className="pb-3">
            <div className="py-2 flex">
                <div className="uppercase font-bold w-1/2">
                    {education.title}
                </div>
                <div className="text-right w-1/2">
                    {education.startedAt} - {education.endedAt}
                </div>
            </div>

            <div className="py-1">
                {education.institution}
            </div>

            <div className="py-1">
                {education.description}
            </div>
        </div>
    )
}
