
import { dummyData } from '../helpers/dummyData.js';

export class ApiService {
    __baseUrl = '';

    __profileSlug = '';

    /**
     * Default constructor.
     *
     * @param {Object} param
     * @param {string} param.baseUrl
     */
    constructor({
        baseUrl
    }) {
        this.__baseUrl = baseUrl ?? '';
    }

    /**
     * Set profiles slug to base url.
     *
     * @param {Object} param
     * @param {string} param.profileSlug
     */
    setProfileSlug({profileSlug}) {
        this.__profileSlug = profileSlug;
    }

    get __profileUrl() {
        return this.__baseUrl + '/' + this.__profileSlug;
    }

    /**
     * Make a HTTP GET request to web api.
     *
     * @param {Object} param
     * @param {string} param.endPoint
     * @param {?string} param.queryString
     * @param {?Object} param.headers
     */
    get({endPoint, queryString = '', headers = {}}) {
        return new Promise(async (resolve, reject) => {
            if (!this.__profileUrl || this.__profileSlug !== 'johndoe') {
                return reject({
                    error: 404
                });
            }

            if (endPoint == '/projects') {
                return resolve(dummyData.projects);
            } else if (endPoint == '/about-me') {
                return resolve(dummyData.aboutMeProfile);
            } else if (endPoint == '') {
                const { title, navLinks, navContactLinks } = dummyData.navContent;

                return resolve({
                    title, navLinks, navContactLinks
                });
            } else if (endPoint == '/professional-profile') {
                return resolve(dummyData.professionalProfile);
            } else if (endPoint == '/skills') {
                return resolve(dummyData.skills);
            } else if (endPoint == '/educations') {
                return resolve(dummyData.educations);
            } else if (endPoint == '/working-experience') {
                return resolve(dummyData.workingExperience);
            }
        });
    }

    /**
     *
     * @param {Object} param
     * @param {string} param.endPoint
     * @param {?Object} param.body
     * @param {?Object} param.headers
     */
    post({endPoint, body, headers}) {
        return new Promise(async (resolve, reject) => {
            setTimeout(() => {
                return resolve();
            }, 3000);
        });
    }
}