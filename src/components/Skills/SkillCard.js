
import React from 'react';

export const SkillCard = ({skill}) => {
    return (
        <div className="pb-3">
            <div className="uppercase font-bold py-2">
                {skill.title}
            </div>

            <div className="py-1">
                {skill.description}
            </div>
        </div>
    )
}
