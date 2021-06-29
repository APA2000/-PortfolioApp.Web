
import React from 'react'

export const ProjectCardBody = ({project}) => {
    return (
        <>
            <div className="font-semibold py-1">
                {project.shortDescription}
            </div>

            <div className="py-1">
                {project.description}
            </div>

            <div className="py-1">
                <div>Stack: </div>
                <p>{project.techStack}</p>
            </div>
        </>
    )
}
