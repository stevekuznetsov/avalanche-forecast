/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StationMetadata } from '../models/StationMetadata';
import type { StationTracking } from '../models/StationTracking';
import type { StationTrackingCreate } from '../models/StationTrackingCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StationTrackingService {

  /**
   * Get Station Tracked
   * Retrieve the station metadata for those stations that are
   * being tracked.
   * @param stid Station id or comma seperated list, for example 'SVB' or 'SVB,BNRI1'
   * @param source Station source. Possible sources are ['mesowest', 'snotel']
   * @returns StationMetadata Successful Response
   * @throws ApiError
   */
  public static getStationTrackedWxV1StationTrackingGet(
    stid?: string,
    source?: string,
  ): CancelablePromise<Array<StationMetadata>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/wx/v1/station/tracking/',
      query: {
        'stid': stid,
        'source': source,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create Station Tracking
   * Create a new station to track
   * @param requestBody
   * @returns StationTracking Successful Response
   * @throws ApiError
   */
  public static createStationTrackingWxV1StationTrackingPost(
    requestBody: StationTrackingCreate,
  ): CancelablePromise<StationTracking> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/wx/v1/station/tracking/',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Delete Station Tracking Current
   * Delete a tracked station by id
   * TODO remove after migration
   * @param stationMetadataId
   * @returns StationTracking Successful Response
   * @throws ApiError
   */
  public static deleteStationTrackingCurrentWxV1StationTrackingStationMetadataIdDelete(
    stationMetadataId: string,
  ): CancelablePromise<StationTracking> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/wx/v1/station/tracking/{station_metadata_id}',
      path: {
        'station_metadata_id': stationMetadataId,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Delete Station Tracking
   * Delete a tracked station by id
   * @param stid
   * @param source
   * @returns StationTracking Successful Response
   * @throws ApiError
   */
  public static deleteStationTrackingWxV1StationTrackingStidSourceDelete(
    stid: string,
    source: string,
  ): CancelablePromise<StationTracking> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/wx/v1/station/tracking/{stid}/{source}',
      path: {
        'stid': stid,
        'source': source,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

}
