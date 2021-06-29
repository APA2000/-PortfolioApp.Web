
import React, { useEffect } from 'react'
import ProjectsViewModel from '../../viewModels/ProjectsViewModel';
import { useViewModel, useProjectsContext } from '../../hooks';
import { observer } from 'mobx-react-lite';
import { ProjectListing } from '../../components/Projects/ProjectListing';
import { LoadingScreen } from '../../components/LoadingScreen';

export const ProjectsView = observer(({}) => {
    const projectsContext = useProjectsContext();

    /**
     * @type {ProjectsViewModel}
     */
    const viewModel = useViewModel(ProjectsViewModel, { projectsRepository: projectsContext.projectsRepository });

    useEffect(() => {
        viewModel.fetchData();
    }, []);

    const renderContent = () => (
        <div>
            <div className="uppercase font-bold tracking-wide p-3 text-2xl">
                <h1>Projects</h1>
            </div>

            <ProjectListing
                projects = {viewModel.projects} />
        </div>
    );

    const renderIsLoading = () => {
        return <LoadingScreen full={false} />;
    };

    return viewModel.dataIsFetched ? renderContent() : renderIsLoading();
});
