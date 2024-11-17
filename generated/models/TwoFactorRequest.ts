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
 * @interface TwoFactorRequest
 */
export interface TwoFactorRequest {
    /**
     * 
     * @type {boolean}
     * @memberof TwoFactorRequest
     */
    enable?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof TwoFactorRequest
     */
    twoFactorCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TwoFactorRequest
     */
    resetSharedKey?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TwoFactorRequest
     */
    resetRecoveryCodes?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TwoFactorRequest
     */
    forgetMachine?: boolean;
}

/**
 * Check if a given object implements the TwoFactorRequest interface.
 */
export function instanceOfTwoFactorRequest(value: object): value is TwoFactorRequest {
    return true;
}

export function TwoFactorRequestFromJSON(json: any): TwoFactorRequest {
    return TwoFactorRequestFromJSONTyped(json, false);
}

export function TwoFactorRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwoFactorRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'enable': json['enable'] == null ? undefined : json['enable'],
        'twoFactorCode': json['twoFactorCode'] == null ? undefined : json['twoFactorCode'],
        'resetSharedKey': json['resetSharedKey'] == null ? undefined : json['resetSharedKey'],
        'resetRecoveryCodes': json['resetRecoveryCodes'] == null ? undefined : json['resetRecoveryCodes'],
        'forgetMachine': json['forgetMachine'] == null ? undefined : json['forgetMachine'],
    };
}

export function TwoFactorRequestToJSON(json: any): TwoFactorRequest {
    return TwoFactorRequestToJSONTyped(json, false);
}

export function TwoFactorRequestToJSONTyped(value?: TwoFactorRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'enable': value['enable'],
        'twoFactorCode': value['twoFactorCode'],
        'resetSharedKey': value['resetSharedKey'],
        'resetRecoveryCodes': value['resetRecoveryCodes'],
        'forgetMachine': value['forgetMachine'],
    };
}

