
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { LoadingScreen } from '../../components/LoadingScreen';
import JobCard from '../../components/WorkingExperience/JobCard';
import { useViewModel, useWorkingExperienceContext } from '../../hooks'
import WorkingExperienceViewModel from '../../viewModels/WorkingExperienceViewModel';

export const WorkingExperienceView = observer(() => {
    const workingExperienceContext = useWorkingExperienceContext();

    /** @type {WorkingExperienceViewModel} */
    const viewModel = useViewModel(WorkingExperienceViewModel, {
        workingExperienceRepository: workingExperienceContext.workingExperienceRepository
    });

    useEffect(() => {
        viewModel.fetchData();
    }, []);

    const renderContent = () => (
        <div className="p-3">
            <div className="uppercase font-bold tracking-wide text-2xl">
                <h1>Working Experience</h1>
            </div>

            <div className="py-3">
            {
                typeof viewModel.jobs !== 'undefined' && viewModel.jobs.length > 0
                    ? viewModel.jobs.map((job) => {
                        return (
                            <JobCard
                                key={job.id}
                                job={job} />
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
