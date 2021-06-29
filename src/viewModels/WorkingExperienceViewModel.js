import { computed, makeObservable } from "mobx";
import { WorkingExperienceRepository } from "../repositories";

export default class WorkingExperienceViewModel {

    /**
     * @param {Object} param
     * @param {WorkingExperienceRepository} param.workingExperienceRepository
     */
    constructor({workingExperienceRepository}) {
        this.__workingExperienceRepository = workingExperienceRepository;

        makeObservable(this, {
            jobs: computed,
        });
    }

    get jobs() {
        return this.__workingExperienceRepository.jobs;
    }

    get dataIsFetched() {
        return this.__workingExperienceRepository.dataIsFetched;
    }

    /**
     * Fetch working experience data from web api.
     *
     * @param {boolean} force
     */
    fetchData = (force = false) => {
        this.__workingExperienceRepository.fetchWorkingExperienceData(force);
    }
}