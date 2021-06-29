
import React from 'react';
import { ProjectCard } from './ProjectCard';

export const ProjectListing = ({projects}) => {
    return (
        <>
            {
                projects
                    ? <div className="">
                        {
                            projects.map((project, index) => {
                                return (
                                    <div key = {project.id}>
                                        <ProjectCard
                                            project = {project} />
                                        {
                                            (index !== projects.length - 1)
                                                ? (
                                                    <div className="py-3">
                                                        <hr />
                                                    </div>
                                                )
                                                : <></>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                : (<div>404</div>)
            }
        </>
    )
};
