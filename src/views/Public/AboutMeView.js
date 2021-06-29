import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { useAboutMeContext } from '../../hooks';
import { useViewModel } from '../../hooks';
import { AboutMeViewModel } from '../../viewModels/AboutMeViewModel';
import { FactsCard } from '../../components/AboutMe/FactsCard';
import { LoadingScreen } from '../../components/LoadingScreen';

export const AboutMeView = observer(({}) => {
    const aboutMeContext = useAboutMeContext();

    /** @type {AboutMeViewModel} */
    const viewModel = useViewModel(AboutMeViewModel, { aboutMeRepository: aboutMeContext.aboutMeRepository });

    useEffect(() => {
        viewModel.fetchData();
    }, []);

    const renderIsLoading = () => {
        return <LoadingScreen full={false} />;
    };

    const renderContent = () => {
        return (
            <div className="text-white">
                <div className="uppercase font-bold tracking-wide p-3 text-2xl">
                    <h1>About Me</h1>
                </div>

                <div className="py-3">
                    <div className="md:flex">
                        <div className="px-3 md:flex-shrink-0 md:my-auto">
                            <img
                                className="rounded-xl w-full object-cover"
                                src={viewModel.imgUrl}
                                alt="" />
                        </div>

                        <FactsCard
                            facts = {viewModel.facts} />
                    </div>
                </div>

                <div className="p-3 mt-3">
                    {viewModel.description}
                </div>
            </div>
        );
    };

    return viewModel.dataIsFetched ? renderContent() : renderIsLoading();
});
