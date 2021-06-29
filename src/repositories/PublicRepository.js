import { ApiService } from "../services";
import { action, makeObservable, observable } from "mobx";
import RepositoryBase from "./RepositoryBase";

export class PublicRepository extends RepositoryBase {

    /**
     * Flag that indicates if profile is not found.
     * @type {boolean}
     */
    profileNotFound = false;

    /**
     * Title of the page.
     *
     * @type {string}
     */
    title = '';

    /**
     * App nav links.
     *
     * @type {{id:number,linkText:string,linkTo:string}[]}
     */
    navLinks = [];

    /**
     * Nav contact links.
     *
     * @type {{id:number,linkText:string,linkTo:string,iconClass:string}[]}
     */
    navContactLinks = [];

    /**
     * @param {Object} params
     * @param {ApiService} params.apiService
     * @param {string} params.profileSlug
     */
    constructor({apiService}) {
        super({apiService});

        makeObservable(this, {
            profileNotFound: observable,
            title: observable,
            navLinks: observable,
            navContactLinks: observable,
            setProfileNotFound: action,
            setTitle: action,
            setNavLinks: action,
            setNavContactLinks: action,
        });
    }

    /**
     * Set profileNotFound flag.
     *
     * @param {Object} param
     * @param {boolean} param.profileNotFound
     */
    setProfileNotFound = ({profileNotFound}) => {
        this.profileNotFound = profileNotFound;
    }

    /**
     * Set title of the page.
     *
     * @param {Object} param
     * @param {string} param.title
     */
    setTitle = ({title}) => {
        this.title = title;
    }

    /**
     * Set app nav links.
     *
     * @param {Object} param
     * @param {{id:number,linkText:string,linkTo:string}[]} param.navLinks
     */
    setNavLinks = ({navLinks}) => {
        this.navLinks = navLinks;
    }

    /**
     * Set contact nav links.
     *
     * @param {Object} param
     * @param {{id:number,linkText:string,linkTo:string,iconClass:string}[]} param.navContactLinks
     */
    setNavContactLinks = ({navContactLinks}) => {
        this.navContactLinks = navContactLinks;
    }

    /**
     * Fetch and set initial data.
     *
     * @param {bool} force
     */
    fetchInitialContent = async (force = false) => {
        if (! this.dataIsFetched || force) {
            this.setDataIsFetched({dataIsFetched:false});

            try {
                const { title, navLinks, navContactLinks } = await this.__apiService.get({
                    endPoint: '',
                    headers: {},
                    queryString: ''
                });

                this.setTitle({title});
                this.setNavLinks({navLinks});
                this.setNavContactLinks({navContactLinks});
            } catch (error) {
                // TODO: set error
            }

            this.setDataIsFetched({dataIsFetched:true});
        }
    }

    /**
     * Set profile slug for api.
     *
     * @param {Object} param
     * @param {string} param.profileSlug
     */
    setProfileSlug = ({profileSlug}) => {
        this.__apiService.setProfileSlug({profileSlug});
    }
}