/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientStationMetadata } from '../models/ClientStationMetadata';
import type { StationMetadata } from '../models/StationMetadata';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StationMetadataService {

  /**
   * Read Station Metadata
   * Retrieve multiple station metadata.
   * @param stid Station id or comma seperated list, for example 'SVB' or 'SVB,BNRI1'
   * @param source Station source. Possible sources are ['mesowest', 'snotel']
   * @param bbox Bounding box, comma seperated list from lower
   * left to upper right. For example, '-116,45,-115,47'
   * @param limit Limit the number of stations returned
   * @param accept
   * @returns any Successful Response
   * @throws ApiError
   */
  public static readStationMetadataWxV1StationMetadataGet(
    stid?: string,
    source?: string,
    bbox?: string,
    limit?: number,
    accept?: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/wx/v1/station/metadata/',
      headers: {
        'accept': accept,
      },
      query: {
        'stid': stid,
        'source': source,
        'bbox': bbox,
        'limit': limit,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Get Station Metadata
   * Get station metadata by it's UUID
   * @param id
   * @returns StationMetadata Successful Response
   * @throws ApiError
   */
  public static getStationMetadataWxV1StationMetadataIdGet(
    id: string,
  ): CancelablePromise<StationMetadata> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/wx/v1/station/metadata/{id}',
      path: {
        'id': id,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Read Station Metadata
   * Retrieve multiple station metadata.
   * @returns ClientStationMetadata Successful Response
   * @throws ApiError
   */
  public static readStationMetadataWxV1StationMetadataClientGet(): CancelablePromise<Array<ClientStationMetadata>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/wx/v1/station/metadata/client/',
    });
  }

}
