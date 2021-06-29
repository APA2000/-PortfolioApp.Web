
import React from 'react'

export const FactsCard = ({facts}) => {
    return (
        <div className="w-full px-3">
            {
                facts.map((fact, index) => {
                    return (
                        <div className="flex flex-row leading-snug py-1" key={fact.title}>
                            <div className="w-1/3">
                                {fact.title}:
                            </div>

                            <div className="w-2/3">
                                {fact.value}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
