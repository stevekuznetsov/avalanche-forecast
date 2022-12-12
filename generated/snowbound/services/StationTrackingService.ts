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
   * @returns StationMetadata Successful Response
   * @throws ApiError
   */
  public static getStationTrackedWxV1StationTrackingGet({
    stid,
    source,
  }: {
    /**
     * Station id or comma seperated list, for example 'SVB' or 'SVB,BNRI1'
     */
    stid?: string,
    /**
     * Station source. Possible sources are ['mesowest', 'snotel']
     */
    source?: string,
  }): CancelablePromise<Array<StationMetadata>> {
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
   * @returns StationTracking Successful Response
   * @throws ApiError
   */
  public static createStationTrackingWxV1StationTrackingPost({
    requestBody,
  }: {
    requestBody: StationTrackingCreate,
  }): CancelablePromise<StationTracking> {
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
   * @returns StationTracking Successful Response
   * @throws ApiError
   */
  public static deleteStationTrackingCurrentWxV1StationTrackingStationMetadataIdDelete({
    stationMetadataId,
  }: {
    stationMetadataId: string,
  }): CancelablePromise<StationTracking> {
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
   * @returns StationTracking Successful Response
   * @throws ApiError
   */
  public static deleteStationTrackingWxV1StationTrackingStidSourceDelete({
    stid,
    source,
  }: {
    stid: string,
    source: string,
  }): CancelablePromise<StationTracking> {
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
