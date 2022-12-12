/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TimeseriesDataService {

  /**
   * Get Station Data Timeseries
   * Retrieve a timeseries for the station data
   * @param stid Station id or comma seperated list, for example                 'SVB' or 'SVB,BNRI1'
   * @param source Data source to look for the station id, only used                 if there are duplicate station id accross data sources. For                 example, 'mesowest' or 'mesowest,snotel'
   * @param startDate Start date in UTC to begin search,                 format as YYYYMMDDHHmm
   * @param endDate End date in UTC to begin search,                 format as YYYYMMDDHHmm
   * @param units Units return data in
   * @param output Output format type. Options are                 ["mesowest", "records"]
   * @param calcDiff Calculate 24hr difference
   * @param rawData Typically unit conversion, variable filtering and                 rounding are applied to the returned data. Setting to true                 will not apply unit conversion, variable filtering or                 rounding of the data. NOTE: the returned variables in                 VARIABLES may not contain all of the variables in the data                 structure.
   * @param variables List of variables to return. Defaults to                 all variables.
   * @returns any Successful Response
   * @throws ApiError
   */
  public static getStationDataTimeseriesWxV1StationDataTimeseriesGet(
    stid: string,
    source: string,
    startDate?: string,
    endDate?: string,
    units: string = 'default',
    output: string = 'mesowest',
    calcDiff: boolean = false,
    rawData: boolean = false,
    variables?: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/wx/v1/station/data/timeseries/',
      query: {
        'stid': stid,
        'source': source,
        'start_date': startDate,
        'end_date': endDate,
        'units': units,
        'output': output,
        'calc_diff': calcDiff,
        'raw_data': rawData,
        'variables': variables,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

}
