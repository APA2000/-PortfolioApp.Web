import { computed, makeObservable } from "mobx";
import { ProfessionalProfileRepository } from "../repositories";


export class ProfessionalProfileViewModel {

    /**
     * @param {Object} param
     * @param {ProfessionalProfileRepository} param.professionalProfileRepository
     */
    constructor({ professionalProfileRepository }) {
        this.__professionalProfileRepository = professionalProfileRepository;

        makeObservable(this, {
            description: computed,
            descriptionParagrapsh: computed
        })
    }

    /**
     * Fetch professional profile data from web api.
     *
     * @param {boolean} force
     */
    fetchData = (force = false) => {
        this.__professionalProfileRepository.fetchData(force);
    }

    get description() {
        return this.__professionalProfileRepository.description;
    }

    get descriptionParagrapsh() {
        return this.__professionalProfileRepository.description.paragraphs;
    }

    get dataIsFetched() {
        return this.__professionalProfileRepository.dataIsFetched;
    }
}