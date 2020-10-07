    /* tslint:disable */
    /* eslint-disable */
    /**
 * Regula Face Recognition Web API
 * Regula Face Recognition Web API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


    import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
    import { Configuration } from '../configuration.js';
    // Some imports not used depending on template conditions
    // @ts-ignore
    import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base.js';
        // @ts-ignore
        import { DepthLiveness } from '../models/index.js';
        // @ts-ignore
        import { ImageLiveness } from '../models/index.js';
        // @ts-ignore
        import { LivenessResultItem } from '../models/index.js';
        // @ts-ignore
        import { OperationLog } from '../models/index.js';
    /**
    * LivenessApi - axios parameter creator
    * @export
    */
    export const LivenessApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
        * 
            * @summary Detect faces from the images and check their liveness status. Liveness status depends on color depth.
            * @param {DepthLiveness} depthLiveness 
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        checkDepthLiveness: async (depthLiveness: DepthLiveness, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'depthLiveness' is not null or undefined
                    if (depthLiveness === null || depthLiveness === undefined) {
                    throw new RequiredError('depthLiveness','Required parameter depthLiveness was null or undefined when calling checkDepthLiveness.');
                    }
            const localVarPath = `/liveness/depth`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
            baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


        
                    localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
            query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
            query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
                const needsSerialization = (typeof depthLiveness !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                localVarRequestOptions.data =  needsSerialization ? JSON.stringify(depthLiveness !== undefined ? depthLiveness : {}) : (depthLiveness || "");

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        /**
        * 
            * @param {ImageLiveness} imageLiveness 
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        checkImageLiveness: async (imageLiveness: ImageLiveness, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'imageLiveness' is not null or undefined
                    if (imageLiveness === null || imageLiveness === undefined) {
                    throw new RequiredError('imageLiveness','Required parameter imageLiveness was null or undefined when calling checkImageLiveness.');
                    }
            const localVarPath = `/liveness/image`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
            baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


        
                    localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
            query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
            query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
                const needsSerialization = (typeof imageLiveness !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                localVarRequestOptions.data =  needsSerialization ? JSON.stringify(imageLiveness !== undefined ? imageLiveness : {}) : (imageLiveness || "");

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        /**
        * 
            * @summary Detect face from the video and check its liveness status.
            * @param {any} body 
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        checkVideoLiveness: async (body: any, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'body' is not null or undefined
                    if (body === null || body === undefined) {
                    throw new RequiredError('body','Required parameter body was null or undefined when calling checkVideoLiveness.');
                    }
            const localVarPath = `/liveness`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
            baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


        
                    localVarHeaderParameter['Content-Type'] = 'application/octet-stream';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
            query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
            query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
                const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        }
        };

        /**
        * LivenessApi - functional programming interface
        * @export
        */
        export const LivenessApiFp = function(configuration?: Configuration) {
        return {
            /**
            * 
                * @summary Detect faces from the images and check their liveness status. Liveness status depends on color depth.
                * @param {DepthLiveness} depthLiveness 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async checkDepthLiveness(depthLiveness: DepthLiveness, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LivenessResultItem>>> {
            const localVarAxiosArgs = await LivenessApiAxiosParamCreator(configuration).checkDepthLiveness(depthLiveness, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
            /**
            * 
                * @param {ImageLiveness} imageLiveness 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async checkImageLiveness(imageLiveness: ImageLiveness, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LivenessResultItem>>> {
            const localVarAxiosArgs = await LivenessApiAxiosParamCreator(configuration).checkImageLiveness(imageLiveness, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
            /**
            * 
                * @summary Detect face from the video and check its liveness status.
                * @param {any} body 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async checkVideoLiveness(body: any, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LivenessResultItem>> {
            const localVarAxiosArgs = await LivenessApiAxiosParamCreator(configuration).checkVideoLiveness(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
        }
        };

        /**
        * LivenessApi - factory interface
        * @export
        */
        export const LivenessApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        return {
            /**
            * 
                * @summary Detect faces from the images and check their liveness status. Liveness status depends on color depth.
                * @param {DepthLiveness} depthLiveness 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        checkDepthLiveness(depthLiveness: DepthLiveness, options?: any): AxiosPromise<Array<LivenessResultItem>> {
            return LivenessApiFp(configuration).checkDepthLiveness(depthLiveness, options).then((request) => request(axios, basePath));
            },
            /**
            * 
                * @param {ImageLiveness} imageLiveness 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        checkImageLiveness(imageLiveness: ImageLiveness, options?: any): AxiosPromise<Array<LivenessResultItem>> {
            return LivenessApiFp(configuration).checkImageLiveness(imageLiveness, options).then((request) => request(axios, basePath));
            },
            /**
            * 
                * @summary Detect face from the video and check its liveness status.
                * @param {any} body 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        checkVideoLiveness(body: any, options?: any): AxiosPromise<LivenessResultItem> {
            return LivenessApiFp(configuration).checkVideoLiveness(body, options).then((request) => request(axios, basePath));
            },
        };
        };

        /**
        * LivenessApi - object-oriented interface
        * @export
        * @class LivenessApi
        * @extends {BaseAPI}
        */
            export class LivenessApi extends BaseAPI {
            /**
            * 
                * @summary Detect faces from the images and check their liveness status. Liveness status depends on color depth.
                    * @param {DepthLiveness} depthLiveness 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof LivenessApi
            */
                protected checkDepthLivenessGen(depthLiveness: DepthLiveness, options?: any) {
                return LivenessApiFp(this.configuration).checkDepthLiveness(depthLiveness, options).then((request) => request(this.axios, this.basePath));
                }

            /**
            * 
                    * @param {ImageLiveness} imageLiveness 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof LivenessApi
            */
                protected checkImageLivenessGen(imageLiveness: ImageLiveness, options?: any) {
                return LivenessApiFp(this.configuration).checkImageLiveness(imageLiveness, options).then((request) => request(this.axios, this.basePath));
                }

            /**
            * 
                * @summary Detect face from the video and check its liveness status.
                    * @param {any} body 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof LivenessApi
            */
                protected checkVideoLivenessGen(body: any, options?: any) {
                // return LivenessApiFp(this.configuration).checkVideoLiveness(body, options).then((request) => request(this.axios, this.basePath));
                return LivenessApiFp(this.configuration).checkVideoLiveness(body, options).then((request) => request(this.axios, this.basePath));
                }
        }