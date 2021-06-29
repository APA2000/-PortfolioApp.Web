

import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { EducationCard } from '../../components/Education/EducationCard';
import { LoadingScreen } from '../../components/LoadingScreen';
import { useEducationContext, useViewModel } from '../../hooks';
import EducationViewModel from '../../viewModels/EducationViewModel';

export const EducationView = observer(() => {
    const educationContext = useEducationContext();

    /** @type {EducationViewModel} */
    const viewModel = useViewModel(EducationViewModel, {
        educationRepository: educationContext.educationRepository
    });

    useEffect(() => {
        viewModel.fetchData();
    }, []);

    const renderIsLoading = () => {
        return <LoadingScreen full={false} />;
    };

    const renderContent = () => (
        <div className="p-3">
            <div className="uppercase font-bold tracking-wide text-2xl">
                <h1>Education</h1>
            </div>

            <div className="py-3">
            {
                viewModel.educations.map((education) => {
                    return (
                        <EducationCard
                            key={education.id}
                            education={education} />
                    )
                })
            }
            </div>
        </div>
    );

    return viewModel.dataIsFetched ? renderContent() : renderIsLoading();
});
