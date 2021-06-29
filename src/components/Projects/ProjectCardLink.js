
import React from 'react'

export const ProjectCardLink = ({link}) => {
    return (
        <a
            target="_blank"
            href={link.url}
            rel="noreferrer"
            className="hover:underline"
        >
            {
                link.iconClass &&
                <i className = {`${link.iconClass} text-lg leading-lg opacity-75"`}></i>
            }
            <span className="ml-2">{ link.to }</span>
        </a>
    )
}
