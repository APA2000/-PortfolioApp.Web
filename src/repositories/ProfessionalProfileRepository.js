
import { action, makeObservable, observable } from 'mobx';
import { ApiService } from '../services';
import RepositoryBase from './RepositoryBase';

export class ProfessionalProfileRepository extends RepositoryBase {

    /**
     * Professional profile description.
     *
     * @type {{paragraphs:string[]}}
     */
    description = {
        paragraphs: []
    };

    /**
     * @param {Object} params
     * @param {ApiService} params.apiService
     */
    constructor({apiService}) {
        super({apiService});

        makeObservable(this, {
            description: observable,
            setDescription: action
        });
    }

    /**
     * Set professional profile description.
     *
     * @param {Object} param
     * @param {{paragraphs:string[]}} param.description
     */
    setDescription = ({description}) => {
        this.description = description;
    }

    /**
     * Fetch professional profile data from web api.
     *
     * @param {boolean} force
     */
    fetchData = async (force = false) => {
        if (! this.dataIsFetched || force) {
            this.setDataIsFetched({dataIsFetched: false});

            try {
                const { description } = await this.__apiService.get({
                    endPoint: '/professional-profile',
                    headers: {},
                    queryString: {}
                });

                this.setDescription({ description: description });
            } catch (error) {
                // TODO: set error
            }

            this.setDataIsFetched({dataIsFetched: true});
        }
    }
}