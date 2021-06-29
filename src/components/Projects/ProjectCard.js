
import React from 'react'
import { ProjectCardBody } from './ProjectCardBody'
import { ProjectCardLink } from './ProjectCardLink'

export const ProjectCard = ({project}) => {
    return (
        <div className="py-3">
            <div className="md:flex">
                <div className="px-3">
                    <div className="uppercase font-bold tracking-wide hover:underline cursor-pointer py-2">
                        {project.title}
                    </div>

                    <ProjectCardBody
                        project={project} />

                    <div className="py-1">
                        {
                            project.links.map((link, index) => {
                                return (
                                    <div key={link.to}>
                                        <ProjectCardLink
                                            link={link} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="px-3 md:flex-shrink-0 md:my-auto">
                    <img
                        className="h-48 rounded-xl w-full object-cover md:w-48"
                        src={project.pics[0]}
                        alt="" />
                </div>
            </div>
        </div>
    )
}
