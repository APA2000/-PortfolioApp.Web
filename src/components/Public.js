
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import { usePublicContext, useViewModel } from '../hooks';
import { PublicViewModel } from '../viewModels/PublicViewModel';

import { AboutMeView } from '../views/Public/AboutMeView';
import { EducationView } from '../views/Public/EducationView';
import { ProfessionalProfileView } from '../views/Public/ProfessionalProfileView';
import { ProjectsView } from '../views/Public/ProjectsView';
import { SkillsView } from '../views/Public/SkillsView';
import { WorkingExperienceView } from '../views/Public/WorkingExperienceView';
import { LoadingScreen } from './LoadingScreen';
import Navbar from './Navbar/Navbar';

export const Public = observer(() => {
    const [redirect, setRedirect] = useState(false);

    const publicContext = usePublicContext();

    /** @type {PublicViewModel} */
    const viewModel = useViewModel(PublicViewModel, {
        publicRepository: publicContext.publicRepository,
    });

    const { slug } = useParams();

    useEffect(() => {
        setTimeout(() => {
            if (! slug || slug.length == 0 || ! slug.trim()){
                setRedirect(true);
            } else {
                viewModel.setProfileSlug({
                    profileSlug: slug.replace(/[^a-zA-Z-]/, '')
                });
                viewModel.fetchInitialData();
            }
        }, 3000);
    }, [])

    const renderIsLoading = () => {
        return <LoadingScreen />;
    };

    const renderRedirect = () => <Redirect to='/404' />;

    const renderRouter = () => {
        return (
            <>
                <Navbar
                    title={viewModel.title}
                    navLinks={viewModel.navLinks}
                    navContactLinks={viewModel.navContactLinks} />

                <div className="container mx-auto px-2 py-3 max-w-md mx-auto md:max-w-2xl xl:max-w-4xl text-white ">
                    <Switch>
                        <Route
                            path = '/:slug' exact
                            component = {AboutMeView} />

                        <Route
                            path = '/:slug/projects'
                            component = {ProjectsView} />

                        <Route
                            path = '/:slug/about-me'
                            component = {AboutMeView} />

                        <Route
                            path = '/:slug/professional-profile'
                            component = {ProfessionalProfileView} />

                        <Route
                            path = '/:slug/skills'
                            component = {SkillsView} />

                        <Route
                            path = '/:slug/education'
                            component = {EducationView} />

                        <Route
                            path = '/:slug/working-experience'
                            component = {WorkingExperienceView} />

                    </Switch>
                </div>
            </>
        );
    };

    return (
        <>
            {
                ! redirect && ! viewModel.dataIsFetched
                    ? renderIsLoading()
                    : (redirect
                        ? renderRedirect()
                        : renderRouter())
            }
        </>
    )
});
