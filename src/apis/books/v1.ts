/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Books API
 *
 * Searches for books and manages your Google Books library.
 *
 * @example
 * const google = require('googleapis');
 * const books = google.books('v1');
 *
 * @namespace books
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Books
 */
export class Books {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  bookshelves: Resource$Bookshelves;
  cloudloading: Resource$Cloudloading;
  dictionary: Resource$Dictionary;
  familysharing: Resource$Familysharing;
  layers: Resource$Layers;
  myconfig: Resource$Myconfig;
  mylibrary: Resource$Mylibrary;
  notification: Resource$Notification;
  onboarding: Resource$Onboarding;
  personalizedstream: Resource$Personalizedstream;
  promooffer: Resource$Promooffer;
  series: Resource$Series;
  volumes: Resource$Volumes;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.bookshelves = new Resource$Bookshelves(this);
    this.cloudloading = new Resource$Cloudloading(this);
    this.dictionary = new Resource$Dictionary(this);
    this.familysharing = new Resource$Familysharing(this);
    this.layers = new Resource$Layers(this);
    this.myconfig = new Resource$Myconfig(this);
    this.mylibrary = new Resource$Mylibrary(this);
    this.notification = new Resource$Notification(this);
    this.onboarding = new Resource$Onboarding(this);
    this.personalizedstream = new Resource$Personalizedstream(this);
    this.promooffer = new Resource$Promooffer(this);
    this.series = new Resource$Series(this);
    this.volumes = new Resource$Volumes(this);
  }
}

export interface Schema$Annotation {
  /**
   * Anchor text after excerpt. For requests, if the user bookmarked a screen
   * that has no flowing text on it, then this field should be empty.
   */
  afterSelectedText: string;
  /**
   * Anchor text before excerpt. For requests, if the user bookmarked a screen
   * that has no flowing text on it, then this field should be empty.
   */
  beforeSelectedText: string;
  /**
   * Selection ranges sent from the client.
   */
  clientVersionRanges: any;
  /**
   * Timestamp for the created time of this annotation.
   */
  created: string;
  /**
   * Selection ranges for the most recent content version.
   */
  currentVersionRanges: any;
  /**
   * User-created data for this annotation.
   */
  data: string;
  /**
   * Indicates that this annotation is deleted.
   */
  deleted: boolean;
  /**
   * The highlight style for this annotation.
   */
  highlightStyle: string;
  /**
   * Id of this annotation, in the form of a GUID.
   */
  id: string;
  /**
   * Resource type.
   */
  kind: string;
  /**
   * The layer this annotation is for.
   */
  layerId: string;
  layerSummary: any;
  /**
   * Pages that this annotation spans.
   */
  pageIds: string[];
  /**
   * Excerpt from the volume.
   */
  selectedText: string;
  /**
   * URL to this resource.
   */
  selfLink: string;
  /**
   * Timestamp for the last time this annotation was modified.
   */
  updated: string;
  /**
   * The volume that this annotation belongs to.
   */
  volumeId: string;
}
export interface Schema$Annotationdata {
  /**
   * The type of annotation this data is for.
   */
  annotationType: string;
  data: any;
  /**
   * Base64 encoded data for this annotation data.
   */
  encoded_data: string;
  /**
   * Unique id for this annotation data.
   */
  id: string;
  /**
   * Resource Type
   */
  kind: string;
  /**
   * The Layer id for this data. *
   */
  layerId: string;
  /**
   * URL for this resource. *
   */
  selfLink: string;
  /**
   * Timestamp for the last time this data was updated. (RFC 3339 UTC date-time
   * format).
   */
  updated: string;
  /**
   * The volume id for this data. *
   */
  volumeId: string;
}
export interface Schema$Annotations {
  /**
   * A list of annotations.
   */
  items: Schema$Annotation[];
  /**
   * Resource type.
   */
  kind: string;
  /**
   * Token to pass in for pagination for the next page. This will not be present
   * if this request does not have more results.
   */
  nextPageToken: string;
  /**
   * Total number of annotations found. This may be greater than the number of
   * notes returned in this response if results have been paginated.
   */
  totalItems: number;
}
export interface Schema$Annotationsdata {
  /**
   * A list of Annotation Data.
   */
  items: Schema$Annotationdata[];
  /**
   * Resource type
   */
  kind: string;
  /**
   * Token to pass in for pagination for the next page. This will not be present
   * if this request does not have more results.
   */
  nextPageToken: string;
  /**
   * The total number of volume annotations found.
   */
  totalItems: number;
}
export interface Schema$AnnotationsSummary {
  kind: string;
  layers: any[];
}
export interface Schema$BooksAnnotationsRange {
  /**
   * The offset from the ending position.
   */
  endOffset: string;
  /**
   * The ending position for the range.
   */
  endPosition: string;
  /**
   * The offset from the starting position.
   */
  startOffset: string;
  /**
   * The starting position for the range.
   */
  startPosition: string;
}
export interface Schema$BooksCloudloadingResource {
  author: string;
  processingState: string;
  title: string;
  volumeId: string;
}
export interface Schema$Bookshelf {
  /**
   * Whether this bookshelf is PUBLIC or PRIVATE.
   */
  access: string;
  /**
   * Created time for this bookshelf (formatted UTC timestamp with millisecond
   * resolution).
   */
  created: string;
  /**
   * Description of this bookshelf.
   */
  description: string;
  /**
   * Id of this bookshelf, only unique by user.
   */
  id: number;
  /**
   * Resource type for bookshelf metadata.
   */
  kind: string;
  /**
   * URL to this resource.
   */
  selfLink: string;
  /**
   * Title of this bookshelf.
   */
  title: string;
  /**
   * Last modified time of this bookshelf (formatted UTC timestamp with
   * millisecond resolution).
   */
  updated: string;
  /**
   * Number of volumes in this bookshelf.
   */
  volumeCount: number;
  /**
   * Last time a volume was added or removed from this bookshelf (formatted UTC
   * timestamp with millisecond resolution).
   */
  volumesLastUpdated: string;
}
export interface Schema$Bookshelves {
  /**
   * A list of bookshelves.
   */
  items: Schema$Bookshelf[];
  /**
   * Resource type.
   */
  kind: string;
}
export interface Schema$BooksVolumesRecommendedRateResponse {
  consistency_token: string;
}
export interface Schema$Category {
  /**
   * A list of onboarding categories.
   */
  items: any[];
  /**
   * Resource type.
   */
  kind: string;
}
export interface Schema$ConcurrentAccessRestriction {
  /**
   * Whether access is granted for this (user, device, volume).
   */
  deviceAllowed: boolean;
  /**
   * Resource type.
   */
  kind: string;
  /**
   * The maximum number of concurrent access licenses for this volume.
   */
  maxConcurrentDevices: number;
  /**
   * Error/warning message.
   */
  message: string;
  /**
   * Client nonce for verification. Download access and client-validation only.
   */
  nonce: string;
  /**
   * Error/warning reason code.
   */
  reasonCode: string;
  /**
   * Whether this volume has any concurrent access restrictions.
   */
  restricted: boolean;
  /**
   * Response signature.
   */
  signature: string;
  /**
   * Client app identifier for verification. Download access and
   * client-validation only.
   */
  source: string;
  /**
   * Time in seconds for license auto-expiration.
   */
  timeWindowSeconds: number;
  /**
   * Identifies the volume for which this entry applies.
   */
  volumeId: string;
}
export interface Schema$Dictlayerdata {
  common: any;
  dict: any;
  kind: string;
}
export interface Schema$Discoveryclusters {
  clusters: any[];
  /**
   * Resorce type.
   */
  kind: string;
  totalClusters: number;
}
export interface Schema$DownloadAccesses {
  /**
   * A list of download access responses.
   */
  downloadAccessList: Schema$DownloadAccessRestriction[];
  /**
   * Resource type.
   */
  kind: string;
}
export interface Schema$DownloadAccessRestriction {
  /**
   * If restricted, whether access is granted for this (user, device, volume).
   */
  deviceAllowed: boolean;
  /**
   * If restricted, the number of content download licenses already acquired
   * (including the requesting client, if licensed).
   */
  downloadsAcquired: number;
  /**
   * If deviceAllowed, whether access was just acquired with this request.
   */
  justAcquired: boolean;
  /**
   * Resource type.
   */
  kind: string;
  /**
   * If restricted, the maximum number of content download licenses for this
   * volume.
   */
  maxDownloadDevices: number;
  /**
   * Error/warning message.
   */
  message: string;
  /**
   * Client nonce for verification. Download access and client-validation only.
   */
  nonce: string;
  /**
   * Error/warning reason code. Additional codes may be added in the future. 0
   * OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200
   * WARNING_USED_LAST_ACCESS
   */
  reasonCode: string;
  /**
   * Whether this volume has any download access restrictions.
   */
  restricted: boolean;
  /**
   * Response signature.
   */
  signature: string;
  /**
   * Client app identifier for verification. Download access and
   * client-validation only.
   */
  source: string;
  /**
   * Identifies the volume for which this entry applies.
   */
  volumeId: string;
}
export interface Schema$FamilyInfo {
  /**
   * Resource type.
   */
  kind: string;
  /**
   * Family membership info of the user that made the request.
   */
  membership: any;
}
export interface Schema$Geolayerdata {
  common: any;
  geo: any;
  kind: string;
}
export interface Schema$Layersummaries {
  /**
   * A list of layer summary items.
   */
  items: Schema$Layersummary[];
  /**
   * Resource type.
   */
  kind: string;
  /**
   * The total number of layer summaries found.
   */
  totalItems: number;
}
export interface Schema$Layersummary {
  /**
   * The number of annotations for this layer.
   */
  annotationCount: number;
  /**
   * Link to get data for this annotation.
   */
  annotationsDataLink: string;
  /**
   * The link to get the annotations for this layer.
   */
  annotationsLink: string;
  /**
   * The list of annotation types contained for this layer.
   */
  annotationTypes: string[];
  /**
   * The content version this resource is for.
   */
  contentVersion: string;
  /**
   * The number of data items for this layer.
   */
  dataCount: number;
  /**
   * Unique id of this layer summary.
   */
  id: string;
  /**
   * Resource Type
   */
  kind: string;
  /**
   * The layer id for this summary.
   */
  layerId: string;
  /**
   * URL to this resource.
   */
  selfLink: string;
  /**
   * Timestamp for the last time an item in this layer was updated. (RFC 3339
   * UTC date-time format).
   */
  updated: string;
  /**
   * The current version of this layer&#39;s volume annotations. Note that this
   * version applies only to the data in the books.layers.volumeAnnotations.*
   * responses. The actual annotation data is versioned separately.
   */
  volumeAnnotationsVersion: string;
  /**
   * The volume id this resource is for.
   */
  volumeId: string;
}
export interface Schema$Metadata {
  /**
   * A list of offline dictionary metadata.
   */
  items: any[];
  /**
   * Resource type.
   */
  kind: string;
}
export interface Schema$Notification {
  body: string;
  /**
   * The list of crm experiment ids.
   */
  crmExperimentIds: string[];
  doc_id: string;
  doc_type: string;
  dont_show_notification: boolean;
  iconUrl: string;
  /**
   * Resource type.
   */
  kind: string;
  notificationGroup: string;
  notification_type: string;
  pcampaign_id: string;
  reason: string;
  show_notification_settings_action: boolean;
  targetUrl: string;
  title: string;
}
export interface Schema$Offers {
  /**
   * A list of offers.
   */
  items: any[];
  /**
   * Resource type.
   */
  kind: string;
}
export interface Schema$ReadingPosition {
  /**
   * Position in an EPUB as a CFI.
   */
  epubCfiPosition: string;
  /**
   * Position in a volume for image-based content.
   */
  gbImagePosition: string;
  /**
   * Position in a volume for text-based content.
   */
  gbTextPosition: string;
  /**
   * Resource type for a reading position.
   */
  kind: string;
  /**
   * Position in a PDF file.
   */
  pdfPosition: string;
  /**
   * Timestamp when this reading position was last updated (formatted UTC
   * timestamp with millisecond resolution).
   */
  updated: string;
  /**
   * Volume id associated with this reading position.
   */
  volumeId: string;
}
export interface Schema$RequestAccess {
  /**
   * A concurrent access response.
   */
  concurrentAccess: Schema$ConcurrentAccessRestriction;
  /**
   * A download access response.
   */
  downloadAccess: Schema$DownloadAccessRestriction;
  /**
   * Resource type.
   */
  kind: string;
}
export interface Schema$Review {
  /**
   * Author of this review.
   */
  author: any;
  /**
   * Review text.
   */
  content: string;
  /**
   * Date of this review.
   */
  date: string;
  /**
   * URL for the full review text, for reviews gathered from the web.
   */
  fullTextUrl: string;
  /**
   * Resource type for a review.
   */
  kind: string;
  /**
   * Star rating for this review. Possible values are ONE, TWO, THREE, FOUR,
   * FIVE or NOT_RATED.
   */
  rating: string;
  /**
   * Information regarding the source of this review, when the review is not
   * from a Google Books user.
   */
  source: any;
  /**
   * Title for this review.
   */
  title: string;
  /**
   * Source type for this review. Possible values are EDITORIAL, WEB_USER or
   * GOOGLE_USER.
   */
  type: string;
  /**
   * Volume that this review is for.
   */
  volumeId: string;
}
export interface Schema$Series {
  /**
   * Resource type.
   */
  kind: string;
  series: any[];
}
export interface Schema$Seriesmembership {
  /**
   * Resorce type.
   */
  kind: string;
  member: Schema$Volume[];
  nextPageToken: string;
}
export interface Schema$Usersettings {
  /**
   * Resource type.
   */
  kind: string;
  /**
   * User settings in sub-objects, each for different purposes.
   */
  notesExport: any;
  notification: any;
}
export interface Schema$Volume {
  /**
   * Any information about a volume related to reading or obtaining that volume
   * text. This information can depend on country (books may be public domain in
   * one country but not in another, e.g.).
   */
  accessInfo: any;
  /**
   * Opaque identifier for a specific version of a volume resource. (In LITE
   * projection)
   */
  etag: string;
  /**
   * Unique identifier for a volume. (In LITE projection.)
   */
  id: string;
  /**
   * Resource type for a volume. (In LITE projection.)
   */
  kind: string;
  /**
   * What layers exist in this volume and high level information about them.
   */
  layerInfo: any;
  /**
   * Recommendation related information for this volume.
   */
  recommendedInfo: any;
  /**
   * Any information about a volume related to the eBookstore and/or
   * purchaseability. This information can depend on the country where the
   * request originates from (i.e. books may not be for sale in certain
   * countries).
   */
  saleInfo: any;
  /**
   * Search result information related to this volume.
   */
  searchInfo: any;
  /**
   * URL to this resource. (In LITE projection.)
   */
  selfLink: string;
  /**
   * User specific information related to this volume. (e.g. page this user last
   * read or whether they purchased this book)
   */
  userInfo: any;
  /**
   * General volume information.
   */
  volumeInfo: any;
}
export interface Schema$Volume2 {
  /**
   * A list of volumes.
   */
  items: Schema$Volume[];
  /**
   * Resource type.
   */
  kind: string;
  nextPageToken: string;
}
export interface Schema$Volumeannotation {
  /**
   * The annotation data id for this volume annotation.
   */
  annotationDataId: string;
  /**
   * Link to get data for this annotation.
   */
  annotationDataLink: string;
  /**
   * The type of annotation this is.
   */
  annotationType: string;
  /**
   * The content ranges to identify the selected text.
   */
  contentRanges: any;
  /**
   * Data for this annotation.
   */
  data: string;
  /**
   * Indicates that this annotation is deleted.
   */
  deleted: boolean;
  /**
   * Unique id of this volume annotation.
   */
  id: string;
  /**
   * Resource Type
   */
  kind: string;
  /**
   * The Layer this annotation is for.
   */
  layerId: string;
  /**
   * Pages the annotation spans.
   */
  pageIds: string[];
  /**
   * Excerpt from the volume.
   */
  selectedText: string;
  /**
   * URL to this resource.
   */
  selfLink: string;
  /**
   * Timestamp for the last time this anntoation was updated. (RFC 3339 UTC
   * date-time format).
   */
  updated: string;
  /**
   * The Volume this annotation is for.
   */
  volumeId: string;
}
export interface Schema$Volumeannotations {
  /**
   * A list of volume annotations.
   */
  items: Schema$Volumeannotation[];
  /**
   * Resource type
   */
  kind: string;
  /**
   * Token to pass in for pagination for the next page. This will not be present
   * if this request does not have more results.
   */
  nextPageToken: string;
  /**
   * The total number of volume annotations found.
   */
  totalItems: number;
  /**
   * The version string for all of the volume annotations in this layer (not
   * just the ones in this response). Note: the version string doesn&#39;t apply
   * to the annotation data, just the information in this response (e.g. the
   * location of annotations in the book).
   */
  version: string;
}
export interface Schema$Volumes {
  /**
   * A list of volumes.
   */
  items: Schema$Volume[];
  /**
   * Resource type.
   */
  kind: string;
  /**
   * Total number of volumes found. This might be greater than the number of
   * volumes returned in this response if results have been paginated.
   */
  totalItems: number;
}
export interface Schema$Volumeseriesinfo {
  /**
   * The display number string. This should be used only for display purposes
   * and the actual sequence should be inferred from the below orderNumber.
   */
  bookDisplayNumber: string;
  /**
   * Resource type.
   */
  kind: string;
  /**
   * Short book title in the context of the series.
   */
  shortSeriesBookTitle: string;
  volumeSeries: any[];
}

export class Resource$Bookshelves {
  root: Books;
  volumes: Resource$Bookshelves$Volumes;
  constructor(root: Books) {
    this.root = root;
    this.volumes = new Resource$Bookshelves$Volumes(root);
  }

  /**
   * books.bookshelves.get
   * @desc Retrieves metadata for a specific bookshelf for the specified user.
   * @alias books.bookshelves.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.shelf ID of bookshelf to retrieve.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.userId ID of user for whom to retrieve bookshelves.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Bookshelf>,
       callback?: BodyResponseCallback<Schema$Bookshelf>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/users/{userId}/bookshelves/{shelf}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['userId', 'shelf'],
          pathParams: ['shelf', 'userId'],
          context: this.root
        };
        createAPIRequest<Schema$Bookshelf>(parameters, callback!);
      };


  /**
   * books.bookshelves.list
   * @desc Retrieves a list of public bookshelves for the specified user.
   * @alias books.bookshelves.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.userId ID of user for whom to retrieve bookshelves.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Bookshelves>,
       callback?: BodyResponseCallback<Schema$Bookshelves>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/users/{userId}/bookshelves')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['userId'],
          pathParams: ['userId'],
          context: this.root
        };
        createAPIRequest<Schema$Bookshelves>(parameters, callback!);
      };
}
export class Resource$Bookshelves$Volumes {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.bookshelves.volumes.list
   * @desc Retrieves volumes in a specific bookshelf for the specified user.
   * @alias books.bookshelves.volumes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults Maximum number of results to return
   * @param {string} params.shelf ID of bookshelf to retrieve volumes.
   * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {integer=} params.startIndex Index of the first element to return (starts at 0)
   * @param {string} params.userId ID of user for whom to retrieve bookshelf volumes.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
       callback?: BodyResponseCallback<Schema$Volumes>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/books/v1/users/{userId}/bookshelves/{shelf}/volumes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['userId', 'shelf'],
          pathParams: ['shelf', 'userId'],
          context: this.root
        };
        createAPIRequest<Schema$Volumes>(parameters, callback!);
      };
}


export class Resource$Cloudloading {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.cloudloading.addBook
   * @alias books.cloudloading.addBook
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.drive_document_id A drive document id. The upload_client_token must not be set.
   * @param {string=} params.mime_type The document MIME type. It can be set only if the drive_document_id is set.
   * @param {string=} params.name The document name. It can be set only if the drive_document_id is set.
   * @param {string=} params.upload_client_token
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  addBook =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$BooksCloudloadingResource>,
       callback?: BodyResponseCallback<Schema$BooksCloudloadingResource>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/cloudloading/addBook')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$BooksCloudloadingResource>(
            parameters, callback!);
      };


  /**
   * books.cloudloading.deleteBook
   * @desc Remove the book and its contents
   * @alias books.cloudloading.deleteBook
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.volumeId The id of the book to be removed.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  deleteBook =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/cloudloading/deleteBook')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['volumeId'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * books.cloudloading.updateBook
   * @alias books.cloudloading.updateBook
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().BooksCloudloadingResource} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updateBook =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$BooksCloudloadingResource>,
       callback?: BodyResponseCallback<Schema$BooksCloudloadingResource>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/cloudloading/updateBook')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$BooksCloudloadingResource>(
            parameters, callback!);
      };
}

export class Resource$Dictionary {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.dictionary.listOfflineMetadata
   * @desc Returns a list of offline dictionary metadata available
   * @alias books.dictionary.listOfflineMetadata
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.cpksver The device/version ID from which to request the data.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  listOfflineMetadata =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Metadata>,
       callback?: BodyResponseCallback<Schema$Metadata>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/dictionary/listOfflineMetadata')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['cpksver'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Metadata>(parameters, callback!);
      };
}

export class Resource$Familysharing {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.familysharing.getFamilyInfo
   * @desc Gets information regarding the family that the user is part of.
   * @alias books.familysharing.getFamilyInfo
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.source String to identify the originator of this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getFamilyInfo =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$FamilyInfo>,
       callback?: BodyResponseCallback<Schema$FamilyInfo>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/familysharing/getFamilyInfo')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$FamilyInfo>(parameters, callback!);
      };


  /**
   * books.familysharing.share
   * @desc Initiates sharing of the content with the user's family. Empty
   * response indicates success.
   * @alias books.familysharing.share
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.docId The docid to share.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string=} params.volumeId The volume to share.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  share =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/familysharing/share')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * books.familysharing.unshare
   * @desc Initiates revoking content that has already been shared with the
   * user's family. Empty response indicates success.
   * @alias books.familysharing.unshare
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.docId The docid to unshare.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string=} params.volumeId The volume to unshare.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  unshare =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/familysharing/unshare')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };
}

export class Resource$Layers {
  root: Books;
  annotationData: Resource$Layers$Annotationdata;
  volumeAnnotations: Resource$Layers$Volumeannotations;
  constructor(root: Books) {
    this.root = root;
    this.annotationData = new Resource$Layers$Annotationdata(root);
    this.volumeAnnotations = new Resource$Layers$Volumeannotations(root);
  }

  /**
   * books.layers.get
   * @desc Gets the layer summary for a volume.
   * @alias books.layers.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.contentVersion The content version for the requested volume.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.summaryId The ID for the layer to get the summary for.
   * @param {string} params.volumeId The volume to retrieve layers for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Layersummary>,
       callback?: BodyResponseCallback<Schema$Layersummary>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/books/v1/volumes/{volumeId}/layersummary/{summaryId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['volumeId', 'summaryId'],
          pathParams: ['summaryId', 'volumeId'],
          context: this.root
        };
        createAPIRequest<Schema$Layersummary>(parameters, callback!);
      };


  /**
   * books.layers.list
   * @desc List the layer summaries for a volume.
   * @alias books.layers.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.contentVersion The content version for the requested volume.
   * @param {integer=} params.maxResults Maximum number of results to return
   * @param {string=} params.pageToken The value of the nextToken from the previous page.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.volumeId The volume to retrieve layers for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Layersummaries>,
       callback?: BodyResponseCallback<Schema$Layersummaries>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/volumes/{volumeId}/layersummary')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['volumeId'],
          pathParams: ['volumeId'],
          context: this.root
        };
        createAPIRequest<Schema$Layersummaries>(parameters, callback!);
      };
}
export class Resource$Layers$Annotationdata {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.layers.annotationData.get
   * @desc Gets the annotation data.
   * @alias books.layers.annotationData.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.allowWebDefinitions For the dictionary layer. Whether or not to allow web definitions.
   * @param {string} params.annotationDataId The ID of the annotation data to retrieve.
   * @param {string} params.contentVersion The content version for the volume you are trying to retrieve.
   * @param {integer=} params.h The requested pixel height for any images. If height is provided width must also be provided.
   * @param {string} params.layerId The ID for the layer to get the annotations.
   * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   * @param {integer=} params.scale The requested scale for the image.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.volumeId The volume to retrieve annotations for.
   * @param {integer=} params.w The requested pixel width for any images. If width is provided height must also be provided.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Annotationdata>,
       callback?: BodyResponseCallback<Schema$Annotationdata>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams:
              ['volumeId', 'layerId', 'annotationDataId', 'contentVersion'],
          pathParams: ['annotationDataId', 'layerId', 'volumeId'],
          context: this.root
        };
        createAPIRequest<Schema$Annotationdata>(parameters, callback!);
      };


  /**
   * books.layers.annotationData.list
   * @desc Gets the annotation data for a volume and layer.
   * @alias books.layers.annotationData.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.annotationDataId The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
   * @param {string} params.contentVersion The content version for the requested volume.
   * @param {integer=} params.h The requested pixel height for any images. If height is provided width must also be provided.
   * @param {string} params.layerId The ID for the layer to get the annotation data.
   * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   * @param {integer=} params.maxResults Maximum number of results to return
   * @param {string=} params.pageToken The value of the nextToken from the previous page.
   * @param {integer=} params.scale The requested scale for the image.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
   * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
   * @param {string} params.volumeId The volume to retrieve annotation data for.
   * @param {integer=} params.w The requested pixel width for any images. If width is provided height must also be provided.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Annotationsdata>,
       callback?: BodyResponseCallback<Schema$Annotationsdata>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/books/v1/volumes/{volumeId}/layers/{layerId}/data')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['volumeId', 'layerId', 'contentVersion'],
          pathParams: ['layerId', 'volumeId'],
          context: this.root
        };
        createAPIRequest<Schema$Annotationsdata>(parameters, callback!);
      };
}

export class Resource$Layers$Volumeannotations {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.layers.volumeAnnotations.get
   * @desc Gets the volume annotation.
   * @alias books.layers.volumeAnnotations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.annotationId The ID of the volume annotation to retrieve.
   * @param {string} params.layerId The ID for the layer to get the annotations.
   * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.volumeId The volume to retrieve annotations for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Volumeannotation>,
       callback?: BodyResponseCallback<Schema$Volumeannotation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['volumeId', 'layerId', 'annotationId'],
          pathParams: ['annotationId', 'layerId', 'volumeId'],
          context: this.root
        };
        createAPIRequest<Schema$Volumeannotation>(parameters, callback!);
      };


  /**
   * books.layers.volumeAnnotations.list
   * @desc Gets the volume annotations for a volume and layer.
   * @alias books.layers.volumeAnnotations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.contentVersion The content version for the requested volume.
   * @param {string=} params.endOffset The end offset to end retrieving data from.
   * @param {string=} params.endPosition The end position to end retrieving data from.
   * @param {string} params.layerId The ID for the layer to get the annotations.
   * @param {string=} params.locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
   * @param {integer=} params.maxResults Maximum number of results to return
   * @param {string=} params.pageToken The value of the nextToken from the previous page.
   * @param {boolean=} params.showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string=} params.startOffset The start offset to start retrieving data from.
   * @param {string=} params.startPosition The start position to start retrieving data from.
   * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
   * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
   * @param {string=} params.volumeAnnotationsVersion The version of the volume annotations that you are requesting.
   * @param {string} params.volumeId The volume to retrieve annotations for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Volumeannotations>,
       callback?: BodyResponseCallback<Schema$Volumeannotations>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/volumes/{volumeId}/layers/{layerId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['volumeId', 'layerId', 'contentVersion'],
          pathParams: ['layerId', 'volumeId'],
          context: this.root
        };
        createAPIRequest<Schema$Volumeannotations>(parameters, callback!);
      };
}


export class Resource$Myconfig {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.myconfig.getUserSettings
   * @desc Gets the current settings for the user.
   * @alias books.myconfig.getUserSettings
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getUserSettings =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Usersettings>,
       callback?: BodyResponseCallback<Schema$Usersettings>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/myconfig/getUserSettings')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Usersettings>(parameters, callback!);
      };


  /**
   * books.myconfig.releaseDownloadAccess
   * @desc Release downloaded content access restriction.
   * @alias books.myconfig.releaseDownloadAccess
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.cpksver The device/version ID from which to release the restriction.
   * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.volumeIds The volume(s) to release restrictions for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  releaseDownloadAccess =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$DownloadAccesses>,
       callback?: BodyResponseCallback<Schema$DownloadAccesses>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/myconfig/releaseDownloadAccess')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['volumeIds', 'cpksver'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$DownloadAccesses>(parameters, callback!);
      };


  /**
   * books.myconfig.requestAccess
   * @desc Request concurrent and download access restrictions.
   * @alias books.myconfig.requestAccess
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.cpksver The device/version ID from which to request the restrictions.
   * @param {string=} params.licenseTypes The type of access license to request. If not specified, the default is BOTH.
   * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
   * @param {string} params.nonce The client nonce value.
   * @param {string} params.source String to identify the originator of this request.
   * @param {string} params.volumeId The volume to request concurrent/download restrictions for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  requestAccess =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$RequestAccess>,
       callback?: BodyResponseCallback<Schema$RequestAccess>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/myconfig/requestAccess')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['source', 'volumeId', 'nonce', 'cpksver'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$RequestAccess>(parameters, callback!);
      };


  /**
   * books.myconfig.syncVolumeLicenses
   * @desc Request downloaded content access for specified volumes on the My
   * eBooks shelf.
   * @alias books.myconfig.syncVolumeLicenses
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.cpksver The device/version ID from which to release the restriction.
   * @param {string=} params.features List of features supported by the client, i.e., 'RENTALS'
   * @param {boolean=} params.includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
   * @param {string=} params.locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
   * @param {string} params.nonce The client nonce value.
   * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
   * @param {string} params.source String to identify the originator of this request.
   * @param {string=} params.volumeIds The volume(s) to request download restrictions for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  syncVolumeLicenses =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
       callback?: BodyResponseCallback<Schema$Volumes>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/myconfig/syncVolumeLicenses')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['source', 'nonce', 'cpksver'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Volumes>(parameters, callback!);
      };


  /**
   * books.myconfig.updateUserSettings
   * @desc Sets the settings for the user. If a sub-object is specified, it will
   * overwrite the existing sub-object stored in the server. Unspecified
   * sub-objects will retain the existing value.
   * @alias books.myconfig.updateUserSettings
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().Usersettings} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updateUserSettings =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Usersettings>,
       callback?: BodyResponseCallback<Schema$Usersettings>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/myconfig/updateUserSettings')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Usersettings>(parameters, callback!);
      };
}

export class Resource$Mylibrary {
  root: Books;
  annotations: Resource$Mylibrary$Annotations;
  bookshelves: Resource$Mylibrary$Bookshelves;
  readingpositions: Resource$Mylibrary$Readingpositions;
  constructor(root: Books) {
    this.root = root;
    this.annotations = new Resource$Mylibrary$Annotations(root);
    this.bookshelves = new Resource$Mylibrary$Bookshelves(root);
    this.readingpositions = new Resource$Mylibrary$Readingpositions(root);
  }
}
export class Resource$Mylibrary$Annotations {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.mylibrary.annotations.delete
   * @desc Deletes an annotation.
   * @alias books.mylibrary.annotations.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.annotationId The ID for the annotation to delete.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/books/v1/mylibrary/annotations/{annotationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['annotationId'],
          pathParams: ['annotationId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * books.mylibrary.annotations.insert
   * @desc Inserts a new annotation.
   * @alias books.mylibrary.annotations.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.annotationId The ID for the annotation to insert.
   * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
   * @param {boolean=} params.showOnlySummaryInResponse Requests that only the summary of the specified layer be provided in the response.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {().Annotation} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Annotation>,
       callback?: BodyResponseCallback<Schema$Annotation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/mylibrary/annotations')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Annotation>(parameters, callback!);
      };


  /**
   * books.mylibrary.annotations.list
   * @desc Retrieves a list of annotations, possibly filtered.
   * @alias books.mylibrary.annotations.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.contentVersion The content version for the requested volume.
   * @param {string=} params.layerId The layer ID to limit annotation by.
   * @param {string=} params.layerIds The layer ID(s) to limit annotation by.
   * @param {integer=} params.maxResults Maximum number of results to return
   * @param {string=} params.pageToken The value of the nextToken from the previous page.
   * @param {boolean=} params.showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string=} params.updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
   * @param {string=} params.updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
   * @param {string=} params.volumeId The volume to restrict annotations to.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Annotations>,
       callback?: BodyResponseCallback<Schema$Annotations>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/mylibrary/annotations')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Annotations>(parameters, callback!);
      };


  /**
   * books.mylibrary.annotations.summary
   * @desc Gets the summary of specified layers.
   * @alias books.mylibrary.annotations.summary
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.layerIds Array of layer IDs to get the summary for.
   * @param {string} params.volumeId Volume id to get the summary for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  summary =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$AnnotationsSummary>,
       callback?: BodyResponseCallback<Schema$AnnotationsSummary>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/mylibrary/annotations/summary')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['layerIds', 'volumeId'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$AnnotationsSummary>(parameters, callback!);
      };


  /**
   * books.mylibrary.annotations.update
   * @desc Updates an existing annotation.
   * @alias books.mylibrary.annotations.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.annotationId The ID for the annotation to update.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {().Annotation} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Annotation>,
       callback?: BodyResponseCallback<Schema$Annotation>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/books/v1/mylibrary/annotations/{annotationId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['annotationId'],
          pathParams: ['annotationId'],
          context: this.root
        };
        createAPIRequest<Schema$Annotation>(parameters, callback!);
      };
}

export class Resource$Mylibrary$Bookshelves {
  root: Books;
  volumes: Resource$Mylibrary$Bookshelves$Volumes;
  constructor(root: Books) {
    this.root = root;
    this.volumes = new Resource$Mylibrary$Bookshelves$Volumes(root);
  }

  /**
   * books.mylibrary.bookshelves.addVolume
   * @desc Adds a volume to a bookshelf.
   * @alias books.mylibrary.bookshelves.addVolume
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.reason The reason for which the book is added to the library.
   * @param {string} params.shelf ID of bookshelf to which to add a volume.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.volumeId ID of volume to add.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  addVolume =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/books/v1/mylibrary/bookshelves/{shelf}/addVolume')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['shelf', 'volumeId'],
          pathParams: ['shelf'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * books.mylibrary.bookshelves.clearVolumes
   * @desc Clears all volumes from a bookshelf.
   * @alias books.mylibrary.bookshelves.clearVolumes
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.shelf ID of bookshelf from which to remove a volume.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  clearVolumes =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/books/v1/mylibrary/bookshelves/{shelf}/clearVolumes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['shelf'],
          pathParams: ['shelf'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * books.mylibrary.bookshelves.get
   * @desc Retrieves metadata for a specific bookshelf belonging to the
   * authenticated user.
   * @alias books.mylibrary.bookshelves.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.shelf ID of bookshelf to retrieve.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Bookshelf>,
       callback?: BodyResponseCallback<Schema$Bookshelf>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/mylibrary/bookshelves/{shelf}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['shelf'],
          pathParams: ['shelf'],
          context: this.root
        };
        createAPIRequest<Schema$Bookshelf>(parameters, callback!);
      };


  /**
   * books.mylibrary.bookshelves.list
   * @desc Retrieves a list of bookshelves belonging to the authenticated user.
   * @alias books.mylibrary.bookshelves.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.source String to identify the originator of this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Bookshelves>,
       callback?: BodyResponseCallback<Schema$Bookshelves>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/mylibrary/bookshelves')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Bookshelves>(parameters, callback!);
      };


  /**
   * books.mylibrary.bookshelves.moveVolume
   * @desc Moves a volume within a bookshelf.
   * @alias books.mylibrary.bookshelves.moveVolume
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.shelf ID of bookshelf with the volume.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.volumeId ID of volume to move.
   * @param {integer} params.volumePosition Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  moveVolume =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/books/v1/mylibrary/bookshelves/{shelf}/moveVolume')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['shelf', 'volumeId', 'volumePosition'],
          pathParams: ['shelf'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * books.mylibrary.bookshelves.removeVolume
   * @desc Removes a volume from a bookshelf.
   * @alias books.mylibrary.bookshelves.removeVolume
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.reason The reason for which the book is removed from the library.
   * @param {string} params.shelf ID of bookshelf from which to remove a volume.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.volumeId ID of volume to remove.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  removeVolume =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/books/v1/mylibrary/bookshelves/{shelf}/removeVolume')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['shelf', 'volumeId'],
          pathParams: ['shelf'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };
}
export class Resource$Mylibrary$Bookshelves$Volumes {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.mylibrary.bookshelves.volumes.list
   * @desc Gets volume information for volumes on a bookshelf.
   * @alias books.mylibrary.bookshelves.volumes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
   * @param {integer=} params.maxResults Maximum number of results to return
   * @param {string=} params.projection Restrict information returned to a set of selected fields.
   * @param {string=} params.q Full-text search query string in this bookshelf.
   * @param {string} params.shelf The bookshelf ID or name retrieve volumes for.
   * @param {boolean=} params.showPreorders Set to true to show pre-ordered books. Defaults to false.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {integer=} params.startIndex Index of the first element to return (starts at 0)
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
       callback?: BodyResponseCallback<Schema$Volumes>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/books/v1/mylibrary/bookshelves/{shelf}/volumes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['shelf'],
          pathParams: ['shelf'],
          context: this.root
        };
        createAPIRequest<Schema$Volumes>(parameters, callback!);
      };
}


export class Resource$Mylibrary$Readingpositions {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.mylibrary.readingpositions.get
   * @desc Retrieves my reading position information for a volume.
   * @alias books.mylibrary.readingpositions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.contentVersion Volume content version for which this reading position is requested.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.volumeId ID of volume for which to retrieve a reading position.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$ReadingPosition>,
       callback?: BodyResponseCallback<Schema$ReadingPosition>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/books/v1/mylibrary/readingpositions/{volumeId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['volumeId'],
          pathParams: ['volumeId'],
          context: this.root
        };
        createAPIRequest<Schema$ReadingPosition>(parameters, callback!);
      };


  /**
   * books.mylibrary.readingpositions.setPosition
   * @desc Sets my reading position information for a volume.
   * @alias books.mylibrary.readingpositions.setPosition
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.action Action that caused this reading position to be set.
   * @param {string=} params.contentVersion Volume content version for which this reading position applies.
   * @param {string=} params.deviceCookie Random persistent device cookie optional on set position.
   * @param {string} params.position Position string for the new volume reading position.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.timestamp RFC 3339 UTC format timestamp associated with this reading position.
   * @param {string} params.volumeId ID of volume for which to update the reading position.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setPosition =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/books/v1/mylibrary/readingpositions/{volumeId}/setPosition')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['volumeId', 'timestamp', 'position'],
          pathParams: ['volumeId'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };
}


export class Resource$Notification {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.notification.get
   * @desc Returns notification details for a given notification id.
   * @alias books.notification.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
   * @param {string} params.notification_id String to identify the notification.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Notification>,
       callback?: BodyResponseCallback<Schema$Notification>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/notification/get')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['notification_id'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Notification>(parameters, callback!);
      };
}

export class Resource$Onboarding {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.onboarding.listCategories
   * @desc List categories for onboarding experience.
   * @alias books.onboarding.listCategories
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  listCategories =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Category>,
       callback?: BodyResponseCallback<Schema$Category>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/onboarding/listCategories')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Category>(parameters, callback!);
      };


  /**
   * books.onboarding.listCategoryVolumes
   * @desc List available volumes under categories for onboarding experience.
   * @alias books.onboarding.listCategoryVolumes
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.categoryId List of category ids requested.
   * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
   * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
   * @param {integer=} params.pageSize Number of maximum results per page to be included in the response.
   * @param {string=} params.pageToken The value of the nextToken from the previous page.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  listCategoryVolumes =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Volume2>,
       callback?: BodyResponseCallback<Schema$Volume2>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/onboarding/listCategoryVolumes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Volume2>(parameters, callback!);
      };
}

export class Resource$Personalizedstream {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.personalizedstream.get
   * @desc Returns a stream of personalized book clusters
   * @alias books.personalizedstream.get
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
   * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Discoveryclusters>,
       callback?: BodyResponseCallback<Schema$Discoveryclusters>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/personalizedstream/get')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Discoveryclusters>(parameters, callback!);
      };
}

export class Resource$Promooffer {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.promooffer.accept
   * @alias books.promooffer.accept
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.androidId device android_id
   * @param {string=} params.device device device
   * @param {string=} params.manufacturer device manufacturer
   * @param {string=} params.model device model
   * @param {string=} params.offerId
   * @param {string=} params.product device product
   * @param {string=} params.serial device serial
   * @param {string=} params.volumeId Volume id to exercise the offer
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  accept =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/promooffer/accept')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * books.promooffer.dismiss
   * @alias books.promooffer.dismiss
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.androidId device android_id
   * @param {string=} params.device device device
   * @param {string=} params.manufacturer device manufacturer
   * @param {string=} params.model device model
   * @param {string=} params.offerId Offer to dimiss
   * @param {string=} params.product device product
   * @param {string=} params.serial device serial
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  dismiss =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/promooffer/dismiss')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * books.promooffer.get
   * @desc Returns a list of promo offers available to the user
   * @alias books.promooffer.get
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.androidId device android_id
   * @param {string=} params.device device device
   * @param {string=} params.manufacturer device manufacturer
   * @param {string=} params.model device model
   * @param {string=} params.product device product
   * @param {string=} params.serial device serial
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Offers>,
       callback?: BodyResponseCallback<Schema$Offers>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/promooffer/get')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Offers>(parameters, callback!);
      };
}

export class Resource$Series {
  root: Books;
  membership: Resource$Series$Membership;
  constructor(root: Books) {
    this.root = root;
    this.membership = new Resource$Series$Membership(root);
  }

  /**
   * books.series.get
   * @desc Returns Series metadata for the given series ids.
   * @alias books.series.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.series_id String that identifies the series
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Series>,
       callback?: BodyResponseCallback<Schema$Series>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/series/get')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['series_id'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Series>(parameters, callback!);
      };
}
export class Resource$Series$Membership {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.series.membership.get
   * @desc Returns Series membership data given the series id.
   * @alias books.series.membership.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.page_size Number of maximum results per page to be included in the response.
   * @param {string=} params.page_token The value of the nextToken from the previous page.
   * @param {string} params.series_id String that identifies the series
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Seriesmembership>,
       callback?: BodyResponseCallback<Schema$Seriesmembership>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/series/membership/get')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['series_id'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Seriesmembership>(parameters, callback!);
      };
}


export class Resource$Volumes {
  root: Books;
  associated: Resource$Volumes$Associated;
  mybooks: Resource$Volumes$Mybooks;
  recommended: Resource$Volumes$Recommended;
  useruploaded: Resource$Volumes$Useruploaded;
  constructor(root: Books) {
    this.root = root;
    this.associated = new Resource$Volumes$Associated(root);
    this.mybooks = new Resource$Volumes$Mybooks(root);
    this.recommended = new Resource$Volumes$Recommended(root);
    this.useruploaded = new Resource$Volumes$Useruploaded(root);
  }

  /**
   * books.volumes.get
   * @desc Gets volume information for a single volume.
   * @alias books.volumes.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
   * @param {boolean=} params.includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
   * @param {string=} params.partner Brand results for partner ID.
   * @param {string=} params.projection Restrict information returned to a set of selected fields.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {boolean=} params.user_library_consistent_read
   * @param {string} params.volumeId ID of volume to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Volume>,
       callback?: BodyResponseCallback<Schema$Volume>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/volumes/{volumeId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['volumeId'],
          pathParams: ['volumeId'],
          context: this.root
        };
        createAPIRequest<Schema$Volume>(parameters, callback!);
      };


  /**
   * books.volumes.list
   * @desc Performs a book search.
   * @alias books.volumes.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.download Restrict to volumes by download availability.
   * @param {string=} params.filter Filter search results.
   * @param {string=} params.langRestrict Restrict results to books with this language code.
   * @param {string=} params.libraryRestrict Restrict search to this user's library.
   * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
   * @param {integer=} params.maxResults Maximum number of results to return.
   * @param {string=} params.orderBy Sort search results.
   * @param {string=} params.partner Restrict and brand results for partner ID.
   * @param {string=} params.printType Restrict to books or magazines.
   * @param {string=} params.projection Restrict information returned to a set of selected fields.
   * @param {string} params.q Full-text search query string.
   * @param {boolean=} params.showPreorders Set to true to show books available for preorder. Defaults to false.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
       callback?: BodyResponseCallback<Schema$Volumes>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/volumes')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['q'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Volumes>(parameters, callback!);
      };
}
export class Resource$Volumes$Associated {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.volumes.associated.list
   * @desc Return a list of associated books.
   * @alias books.volumes.associated.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.association Association type.
   * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
   * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.volumeId ID of the source volume.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
       callback?: BodyResponseCallback<Schema$Volumes>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/volumes/{volumeId}/associated')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['volumeId'],
          pathParams: ['volumeId'],
          context: this.root
        };
        createAPIRequest<Schema$Volumes>(parameters, callback!);
      };
}

export class Resource$Volumes$Mybooks {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.volumes.mybooks.list
   * @desc Return a list of books in My Library.
   * @alias books.volumes.mybooks.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.acquireMethod How the book was acquired
   * @param {string=} params.country ISO-3166-1 code to override the IP-based location.
   * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
   * @param {integer=} params.maxResults Maximum number of results to return.
   * @param {string=} params.processingState The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
       callback?: BodyResponseCallback<Schema$Volumes>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/volumes/mybooks')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Volumes>(parameters, callback!);
      };
}

export class Resource$Volumes$Recommended {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.volumes.recommended.list
   * @desc Return a list of recommended books for the current user.
   * @alias books.volumes.recommended.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
   * @param {string=} params.maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
       callback?: BodyResponseCallback<Schema$Volumes>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/volumes/recommended')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Volumes>(parameters, callback!);
      };


  /**
   * books.volumes.recommended.rate
   * @desc Rate a recommended book for the current user.
   * @alias books.volumes.recommended.rate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
   * @param {string} params.rating Rating to be given to the volume.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {string} params.volumeId ID of the source volume.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  rate =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$BooksVolumesRecommendedRateResponse>,
       callback?: BodyResponseCallback<
           Schema$BooksVolumesRecommendedRateResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/volumes/recommended/rate')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['rating', 'volumeId'],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$BooksVolumesRecommendedRateResponse>(
            parameters, callback!);
      };
}

export class Resource$Volumes$Useruploaded {
  root: Books;
  constructor(root: Books) {
    this.root = root;
  }

  /**
   * books.volumes.useruploaded.list
   * @desc Return a list of books uploaded by the current user.
   * @alias books.volumes.useruploaded.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
   * @param {integer=} params.maxResults Maximum number of results to return.
   * @param {string=} params.processingState The processing state of the user uploaded volumes to be returned.
   * @param {string=} params.source String to identify the originator of this request.
   * @param {integer=} params.startIndex Index of the first result to return (starts at 0)
   * @param {string=} params.volumeId The ids of the volumes to be returned. If not specified all that match the processingState are returned.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Volumes>,
       callback?: BodyResponseCallback<Schema$Volumes>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/books/v1/volumes/useruploaded')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Volumes>(parameters, callback!);
      };
}
