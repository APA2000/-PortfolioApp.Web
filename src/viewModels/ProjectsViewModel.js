import { computed, makeObservable } from 'mobx';
import { ProjectsRepository } from '../repositories';

export default class ProjectsViewModel {

    /**
     * @param {Object} param
     * @param {ProjectsRepository} param.projectsRepository
     */
    constructor({ projectsRepository }) {
        this.__projectsRepository = projectsRepository;

        makeObservable(this, {
            projects: computed
        })
    }

    get projects() {
        return this.__projectsRepository.projects;
    }

    get dataIsFetched() {
        return this.__projectsRepository.dataIsFetched;
    }

    /**
     * Fetch projects data from web api.
     *
     * @param {boolean} force
     */
    fetchData = (force = false) => {
        this.__projectsRepository.fetchData(force);
    }
}