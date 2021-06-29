import { action, makeObservable, observable } from "mobx";
import { ApiService } from "../services";
import RepositoryBase from "./RepositoryBase";

export class AboutMeRepository extends RepositoryBase {

    /**
     * Facts card, like date of birth etc.
     *
     * @type {{title:string,value:string}[]}
     */
    facts = [];

    /**
     * Url to profice picture.
     */
    imgUrl = '';

    /**
     * About me description text.
     */
    description = '';

    /**
     * @param {Object} params
     * @param {ApiService} params.apiService
     */
    constructor({apiService}) {
        super({apiService})

        makeObservable(this, {
            facts: observable,
            imgUrl: observable,
            description: observable,
            setAboutMeInfo: action,
            setFacts: action,
            setImgUrl: action,
            setDescription: action
        });
    }

    /**
     * Set about-me info values.
     *
     * @param {Object} param
     * @param {{title:string,value:string}[]} param.facts
     * @param {string} param.imgUrl
     * @param {string} param.description
     */
    setAboutMeInfo = ({facts, imgUrl, description}) => {
        this.facts = facts;
        this.imgUrl = imgUrl;
        this.description = description;
    }

    /**
     * Set facts array.
     *
     * @param {Object} param
     * @param {{title:string,value:string}[]} param.facts
     */
    setFacts = ({facts}) => {
        this.facts = facts;
    }

    /**
     * Set profile pic url.
     *
     * @param {Object} param
     * @param {string} param.imgUrl
     */
    setImgUrl = ({imgUrl}) => {
        this.imgUrl = imgUrl;
    }

    /**
     * Set about-me description text.
     *
     * @param {Object} param
     * @param {string} param.description
     */
    setDescription = ({description}) => {
        this.description = description;
    }

    /**
     * Fetch about-me info from web api.
     *
     * @param {boolean} force
     */
    fetchAboutMeProfile = async (force = false) => {
        if (! this.dataIsFetched || force
        ) {
            this.setDataIsFetched({dataIsFetched: false});

            const aboutMeProfile = await this.__apiService.get({
                endPoint: '/about-me',
                headers: {},
                queryString: ''
            });

            this.setAboutMeInfo(aboutMeProfile);
            this.setDataIsFetched({dataIsFetched: true});
        }
    }
}