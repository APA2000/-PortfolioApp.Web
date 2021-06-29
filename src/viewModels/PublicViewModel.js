import { action, computed, makeObservable } from 'mobx';
import { PublicRepository } from '../repositories';

export class PublicViewModel {

    /**
     * @param {Object} param
     * @param {PublicRepository} param.publicRepository
     */
    constructor({ publicRepository }) {
        this.__publicRepository = publicRepository;

        makeObservable(this, {
            dataIsFetched: computed,
            title: computed,
            navLinks: computed,
            navContactLinks: computed,
        })
    }

    get dataIsFetched() {
        return this.__publicRepository.dataIsFetched;
    }

    get title() {
        return this.__publicRepository.title;
    }

    get navLinks() {
        return this.__publicRepository.navLinks;
    }

    get navContactLinks() {
        return this.__publicRepository.navContactLinks;
    }

    /**
     * Set profile slug for api requests.
     *
     * @param {Object} param
     * @param {string} param.profileSlug
     */
    setProfileSlug = ({profileSlug}) => {
        this.__publicRepository.setProfileSlug({profileSlug: profileSlug});
    }

    /**
     * Fetch initial data, like page title, nav links etc.
     */
    fetchInitialData = () => {
        this.__publicRepository.fetchInitialContent(true);
    }
}