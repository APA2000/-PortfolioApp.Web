import { computed, makeObservable } from "mobx";
import { AboutMeRepository } from "../repositories";


export class AboutMeViewModel {

    /**
     * @param {Object} param
     * @param {AboutMeRepository} param.aboutMeRepository
     */
    constructor({aboutMeRepository}) {
        this.__aboutMeRepository = aboutMeRepository;

        makeObservable(this, {
            facts: computed,
            description: computed,
            imgUrl: computed,
        });
    }

    get dataIsFetched() {
        return this.__aboutMeRepository.dataIsFetched;
    }

    get facts() {
        return this.__aboutMeRepository.facts;
    }

    get description() {
        return this.__aboutMeRepository.description;
    }

    get imgUrl() {
        return this.__aboutMeRepository.imgUrl;
    }

    /**
     * Fetch data from web api.
     *
     * @param {boolean} force
     */
    fetchData = (force = false) => {
        this.__aboutMeRepository.fetchAboutMeProfile(force);
    }
}