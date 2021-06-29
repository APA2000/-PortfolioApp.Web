import { action, makeObservable, observable } from "mobx";
import { ApiService } from '../services';
import RepositoryBase from './RepositoryBase';

export class ProjectsRepository extends RepositoryBase {

    /**
     * Projects array.
     *
     * @type {{id:number,title:string,shortDescription:string,techStack:string,description:string,links:{to:string,url:string,iconClass:string,}[],pics: string[]}[]}
     */
    projects = [];

    /**
     * @param {Object} param
     * @param {ApiService} param.apiService
     */
    constructor({apiService}) {
        super({apiService});

        makeObservable(this, {
            projects: observable,
            setProjects: action,
            __add: action
        });
    }

    /**
     * Fetch projects data from web api.
     *
     * @param {boolean} force
     * @returns
     */
    fetchData = async (force = false) => {
        if (! this.dataIsFetched || force) {
            this.setDataIsFetched({dataIsFetched: false});

            try {
                const projects = await this.__apiService.get({
                    endPoint: '/projects',
                    headers: {},
                    queryString: ''
                });

                this.setProjects({projects});
            } catch (error) {
                // TODO: set error
            }

            this.setDataIsFetched({dataIsFetched: true});
        }
    }

    /**
     * Set projects array
     *
     * @param {Object} param
     * @param {{id:number,title:string,shortDescription:string,techStack:string[],description:string,links:{to:string,url:string,iconClass:string,}[],pics: string[]}[]} param.projects
     */
    setProjects({projects}) {
        this.projects = projects;
    }

    /**
     * Add project to projects array.
     *
     * @param {Object} param
     * @param {{id:number,title:string,shortDescription:string,techStack:string[],description:string,links:{to:string,url:string,iconClass:string,}[],pics: string[]}} param.project
     */
    __add({project}) {
        this.projects.push(project);
    }

    /**
     * Add a newly created project.
     *
     * @param {Object} project
     */
    async add(project) {
        const newProject = await this.__apiService.post({
            body: JSON.stringify(project),
            endPoint: '/projects',
            headers: {}
        });

        this.__add(newProject);
    }
}