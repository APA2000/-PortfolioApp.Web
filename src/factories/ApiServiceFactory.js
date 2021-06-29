import { ApiService } from "../services";

class ApiServiceFactoryImpl
{
    get Instance() {
        if (! this.__instance) {
            this.__instance = new ApiService({
                baseUrl: ''
            });
        }

        return this.__instance;
    }
}

export const ApiServiceFactory = new ApiServiceFactoryImpl();