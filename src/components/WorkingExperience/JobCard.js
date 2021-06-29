

import React from 'react'

export default function JobCard({job}) {
    return (
        <div className="pb-3">
            <div className="py-2 flex">
                <div className="uppercase font-bold w-1/2">
                    {job.title}
                </div>
                <div className="text-right w-1/2">
                    {job.startedAt} - {job.endedAt}
                </div>
            </div>

            <div className="py-1 font-semibold">
                {job.employer}
            </div>

            <div className="py-1">
                {job.description}
            </div>
        </div>
    )
}
