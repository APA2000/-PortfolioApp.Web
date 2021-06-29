import { action, makeObservable, observable } from "mobx";
import { ApiService } from "../services";
import RepositoryBase from './RepositoryBase';

export class WorkingExperienceRepository extends RepositoryBase {

    /**
     * Jobs array.
     *
     * @type {{title:string,employer:string,description:string,startedAt:string,endedAt:string}[]}
     */
    jobs = [];

    /**
     * @param {Object} params
     * @param {ApiService} params.apiService
     */
     constructor({apiService}) {
        super({apiService});

        makeObservable(this, {
            jobs: observable,
            setJobs: action
        });
    }

    /**
     * Set jobs array.
     *
     * @param {Object} param
     * @param {{title:string,employer:string,description:string,startedAt:string,endedAt:string}[]} param.jobs
     */
    setJobs({jobs}) {
        this.jobs = jobs;
    }

    /**
     * Fetch working experience data from web api.
     *
     * @param {boolean} force
     */
    async fetchWorkingExperienceData(force = false) {
        if (! this.dataIsFetched || force) {
            this.setDataIsFetched({dataIsFetched: false});

            try {
                const jobs = await this.__apiService.get({
                    endPoint: '/working-experience',
                    headers: {},
                    queryString: ''
                });

                this.setJobs({jobs});
            } catch (error) {
                // TODO: set error
            }

            this.setDataIsFetched({dataIsFetched: true});
        }
    }
}