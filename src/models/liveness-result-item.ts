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


import { LivenessStatus } from './liveness-status';
import { ImageData } from './image-data';

/**
 * 
 * @export
 * @interface LivenessResultItem
 */
export interface LivenessResultItem {
    /**
     * 
     * @type {ImageData}
     * @memberof LivenessResultItem
     */
    face: ImageData;
    /**
     * 
     * @type {LivenessStatus}
     * @memberof LivenessResultItem
     */
    livenessStatus: LivenessStatus;
    /**
     * 
     * @type {number}
     * @memberof LivenessResultItem
     */
    code?: number;
    /**
     * 
     * @type {number}
     * @memberof LivenessResultItem
     */
    index?: number;
}

