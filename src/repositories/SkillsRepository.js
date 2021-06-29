import { action, makeObservable, observable } from "mobx";
import { ApiService } from '../services';
import RepositoryBase from './RepositoryBase';

export class SkillsRepository extends RepositoryBase {

    /**
     * Skills array.
     *
     * @type {{id:number,title:string,description:string}[]}
    */
    skills = [];

    /**
     * @param {Object} params
     * @param {ApiService} params.apiService
     */
    constructor({apiService}) {
        super({apiService});

        makeObservable(this, {
            skills: observable,
            setSkills: action
        });
    }

    /**
     * Set skills array.
     *
     * @param {Object} param
     * @param {{id:number,title:string,description:string}[]} param.skills
     */
    setSkills({skills}) {
        this.skills = skills;
    }

    /**
     * Fetch skills data from web api.
     *
     * @param {boolean} force
     */
    async fetchData(force = false) {
        if (! this.dataIsFetched || force) {
            this.setDataIsFetched({dataIsFetched: false});

            try {
                const skills = await this.__apiService.get({
                    endPoint: '/skills'
                });

                this.setSkills({skills});
            } catch (error) {
                // TODO: set error
            }

            this.setDataIsFetched({dataIsFetched: true});
        }
    }
}