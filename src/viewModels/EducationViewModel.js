import { computed, makeObservable } from "mobx";
import { EducationRepository } from "../repositories";


export default class EducationViewModel {

    /**
     * @param {Object} param
     * @param {EducationRepository} param.educationRepository
     */
    constructor({educationRepository}) {
        this.__educationRepository = educationRepository;

        makeObservable(this, {
            educations: computed,
        });
    }

    get dataIsFetched() {
        return this.__educationRepository.dataIsFetched;
    }

    get educations() {
        return this.__educationRepository.educations;
    }

    /**
     * Fetch data from web api.
     *
     * @param {boolean} force
     */
    fetchData = (force = false) => {
        this.__educationRepository.fetchEducations(force);
    }
}