import { action, makeObservable, observable } from "mobx";
import { ApiService } from '../services';
import RepositoryBase from "./RepositoryBase";

export class EducationRepository extends RepositoryBase {

    /**
     * Educations array.
     *
     * @type {{id:number,title:string,institution:string,description:string,startedAt:string,endedAt:string}[]}
     */
    educations = [];

    /**
     * @param {Object} params
     * @param {ApiService} params.apiService
     */
    constructor({apiService}) {
        super({apiService});

        makeObservable(this, {
            educations: observable,
            setEducations: action
        });
    }

    /**
     * Set educations array.
     *
     * @param {Object} param
     * @param {{id:number,title:string,institution:string,description:string,startedAt:string,endedAt:string}[]} param.educations
     */
    setEducations({educations}) {
        this.educations = educations;
    }

    /**
     * Fetch educations from web api.
     *
     * @param {boolean} force
     */
    async fetchEducations(force = false) {
        if (! this.dataIsFetched || force) {
            this.setDataIsFetched({dataIsFetched: false});

            try {
                const educations = await this.__apiService.get({
                    endPoint: '/educations'
                });

                this.setEducations({educations});

                this.setDataIsFetched({dataIsFetched: true});
            } catch (error) {

            }
        }
    }
}