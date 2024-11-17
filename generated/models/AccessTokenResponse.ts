/* tslint:disable */
/* eslint-disable */
/**
 * Backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AccessTokenResponse
 */
export interface AccessTokenResponse {
    /**
     * 
     * @type {string}
     * @memberof AccessTokenResponse
     */
    readonly tokenType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccessTokenResponse
     */
    accessToken: string | null;
    /**
     * 
     * @type {number}
     * @memberof AccessTokenResponse
     */
    expiresIn: number;
    /**
     * 
     * @type {string}
     * @memberof AccessTokenResponse
     */
    refreshToken: string | null;
}

/**
 * Check if a given object implements the AccessTokenResponse interface.
 */
export function instanceOfAccessTokenResponse(value: object): value is AccessTokenResponse {
    if (!('accessToken' in value) || value['accessToken'] === undefined) return false;
    if (!('expiresIn' in value) || value['expiresIn'] === undefined) return false;
    if (!('refreshToken' in value) || value['refreshToken'] === undefined) return false;
    return true;
}

export function AccessTokenResponseFromJSON(json: any): AccessTokenResponse {
    return AccessTokenResponseFromJSONTyped(json, false);
}

export function AccessTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessTokenResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'tokenType': json['tokenType'] == null ? undefined : json['tokenType'],
        'accessToken': json['accessToken'],
        'expiresIn': json['expiresIn'],
        'refreshToken': json['refreshToken'],
    };
}

export function AccessTokenResponseToJSON(json: any): AccessTokenResponse {
    return AccessTokenResponseToJSONTyped(json, false);
}

export function AccessTokenResponseToJSONTyped(value?: Omit<AccessTokenResponse, 'tokenType'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'accessToken': value['accessToken'],
        'expiresIn': value['expiresIn'],
        'refreshToken': value['refreshToken'],
    };
}
