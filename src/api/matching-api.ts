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
        import { CompareRequest } from '../models/index.js';
        // @ts-ignore
        import { CompareResponse } from '../models/index.js';
        // @ts-ignore
        import { OperationLog } from '../models/index.js';
    /**
    * MatchingApi - axios parameter creator
    * @export
    */
    export const MatchingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
        * 
            * @summary Compare given persons among themselves and return similarity score for each pair.
            * @param {CompareRequest} compareRequest 
        * @param {*} [options] Override http request option.
        * @throws {RequiredError}
        */
        compare: async (compareRequest: CompareRequest, options: any = {}): Promise<RequestArgs> => {
                    // verify required parameter 'compareRequest' is not null or undefined
                    if (compareRequest === null || compareRequest === undefined) {
                    throw new RequiredError('compareRequest','Required parameter compareRequest was null or undefined when calling compare.');
                    }
            const localVarPath = `/compare`;
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
                const needsSerialization = (typeof compareRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                localVarRequestOptions.data =  needsSerialization ? JSON.stringify(compareRequest !== undefined ? compareRequest : {}) : (compareRequest || "");

            return {
            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
            options: localVarRequestOptions,
            };
            },
        }
        };

        /**
        * MatchingApi - functional programming interface
        * @export
        */
        export const MatchingApiFp = function(configuration?: Configuration) {
        return {
            /**
            * 
                * @summary Compare given persons among themselves and return similarity score for each pair.
                * @param {CompareRequest} compareRequest 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
            async compare(compareRequest: CompareRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompareResponse>> {
            const localVarAxiosArgs = await MatchingApiAxiosParamCreator(configuration).compare(compareRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
            const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
            return axios.request(axiosRequestArgs);
            };
            },
        }
        };

        /**
        * MatchingApi - factory interface
        * @export
        */
        export const MatchingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
        return {
            /**
            * 
                * @summary Compare given persons among themselves and return similarity score for each pair.
                * @param {CompareRequest} compareRequest 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            */
        compare(compareRequest: CompareRequest, options?: any): AxiosPromise<CompareResponse> {
            return MatchingApiFp(configuration).compare(compareRequest, options).then((request) => request(axios, basePath));
            },
        };
        };

        /**
        * MatchingApi - object-oriented interface
        * @export
        * @class MatchingApi
        * @extends {BaseAPI}
        */
            export class MatchingApi extends BaseAPI {
            /**
            * 
                * @summary Compare given persons among themselves and return similarity score for each pair.
                    * @param {CompareRequest} compareRequest 
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof MatchingApi
            */
                protected compareGen(compareRequest: CompareRequest, options?: any) {
                return MatchingApiFp(this.configuration).compare(compareRequest, options).then((request) => request(this.axios, this.basePath));
                }
        }
