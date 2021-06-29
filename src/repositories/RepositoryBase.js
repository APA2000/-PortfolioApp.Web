import { action, makeObservable, observable } from "mobx";
import { ApiService } from "../services";

export default class RepositoryBase {

    /**
     * Flag that indicates if data is fetched.
     * @type {boolean}
     */
    dataIsFetched = false;

    /**
     * @param {Object} params
     * @param {ApiService} params.apiService
     */
    constructor({apiService}) {
        this.__apiService = apiService;

        makeObservable(this, {
            dataIsFetched: observable,
            setDataIsFetched: action
        });
    }

    /**
     * Set dataIsFetched flag.
     *
     * @param {Object} param
     * @param {boolean} param.dataIsFetched
     */
    setDataIsFetched({dataIsFetched}) {
        this.dataIsFetched = dataIsFetched;
    }
}