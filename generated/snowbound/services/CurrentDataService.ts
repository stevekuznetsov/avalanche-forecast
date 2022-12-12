/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CurrentDataService {

  /**
   * Get Station Data Current
   * Retrieve station data
   * @param units Units return data in
   * @param calcDiff Calculate 24hr difference
   * @param accept
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getStationDataCurrentWxV1StationDataCurrentGet(
    units: string = 'default',
    calcDiff: boolean = false,
    accept?: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/wx/v1/station/data/current/',
      headers: {
        'accept': accept,
      },
      query: {
        'units': units,
        'calc_diff': calcDiff,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

}
