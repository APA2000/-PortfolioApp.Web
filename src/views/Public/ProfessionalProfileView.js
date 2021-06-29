
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { LoadingScreen } from '../../components/LoadingScreen';
import { useProfessionalProfileContext, useViewModel } from '../../hooks';
import { ProfessionalProfileViewModel } from '../../viewModels/ProfessionalProfileViewModel';

export const ProfessionalProfileView = observer(() => {
    const professionalProfileContext = useProfessionalProfileContext();

    /** @type {ProfessionalProfileViewModel} */
    const viewModel = useViewModel(ProfessionalProfileViewModel, {
        professionalProfileRepository: professionalProfileContext.professionalProfileRepository
    });

    useEffect(() => {
        viewModel.fetchData();
    },[]);

    const renderIsLoading = () => {
        return <LoadingScreen full={false} />;
    };

    const renderContent = () => (
        <div>
            <div className="uppercase font-bold tracking-wide p-3 text-2xl">
                <h1>Professional Profile</h1>
            </div>

            <div className="px-3">
            {
                viewModel.descriptionParagrapsh.map((paragraph, index) => {
                    return (
                        <article
                            key={`des-para-${index}`}
                            className="py-3"
                        >
                            {paragraph}
                        </article>
                    )
                })
            }
            </div>
        </div>
    );

    return viewModel.dataIsFetched ? renderContent() : renderIsLoading();
});
