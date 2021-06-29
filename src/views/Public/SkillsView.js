
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { LoadingScreen } from '../../components/LoadingScreen';
import { SkillCard } from '../../components/Skills/SkillCard';
import { useSkillsContext, useViewModel } from '../../hooks';
import { SkillsViewModel } from '../../viewModels/SkillsViewModel';

export const SkillsView = observer(() => {
    const skillsContext = useSkillsContext();

    /** @type {SkillsViewModel} */
    const viewModel = useViewModel(SkillsViewModel, {
        skillsRepository: skillsContext.skillsRepository
    });

    useEffect(() => {
        viewModel.fetchData();
    }, []);

    const renderContent = () => (
        <div className="p-3">
            <div className="uppercase font-bold tracking-wide text-2xl">
                <h1>Skills</h1>
            </div>

            <div className="py-3">
            {
                typeof viewModel.skills !== 'undefined' && viewModel.skills.length > 0
                    ? viewModel.skills.map((skill) => {
                        return (
                            <SkillCard
                                key = {skill.id}
                                skill={skill} />
                        )
                    })
                    : (<div>404</div>)
            }
            </div>
        </div>
    );

    const renderIsLoading = () => <LoadingScreen full={false} />;

    return viewModel.dataIsFetched ? renderContent() : renderIsLoading();
});
