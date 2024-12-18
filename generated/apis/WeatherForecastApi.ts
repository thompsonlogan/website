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


import * as runtime from '../runtime';
import type {
  WeatherForecast,
} from '../models/index';
import {
    WeatherForecastFromJSON,
    WeatherForecastToJSON,
} from '../models/index';

/**
 * 
 */
export class WeatherForecastApi extends runtime.BaseAPI {

    /**
     */
    async getWeatherForecastRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<WeatherForecast>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/WeatherForecast`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WeatherForecastFromJSON));
    }

    /**
     */
    async getWeatherForecast(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<WeatherForecast>> {
        const response = await this.getWeatherForecastRaw(initOverrides);
        return await response.value();
    }

}
