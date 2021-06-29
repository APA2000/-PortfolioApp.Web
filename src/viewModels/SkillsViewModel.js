import { computed, makeObservable } from "mobx";
import { SkillsRepository } from "../repositories";

export class SkillsViewModel {

    /**
     * @param {Object} param
     * @param {SkillsRepository} param.skillsRepository
     */
    constructor({skillsRepository}) {
        this.__skillsRepository = skillsRepository;

        makeObservable(this, {
            skills: computed
        });
    }

    get skills() {
        return this.__skillsRepository.skills;
    }

    get dataIsFetched() {
        return this.__skillsRepository.dataIsFetched;
    }

    /**
     * Fetch skills data from web api.
     *
     * @param {boolean} force
     */
    fetchData = (force = false) => {
        this.__skillsRepository.fetchData(force);
    }
}