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


import { ImageSource } from './image-source';
import { ImageData } from './image-data';

/**
 * 
 * @export
 * @interface CompareRequestFields
 */
export interface CompareRequestFields {
    /**
     * 
     * @type {number}
     * @memberof CompareRequestFields
     */
    index?: number;
    /**
     * 
     * @type {string}
     * @memberof CompareRequestFields
     */
    format?: string;
    /**
     * 
     * @type {ImageSource}
     * @memberof CompareRequestFields
     */
    type?: ImageSource;
    /**
     * 
     * @type {ImageData}
     * @memberof CompareRequestFields
     */
    data: ImageData;
}


