/*!
 * Copyright 2019, 2020 Visulate LLC. All Rights Reserved.
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

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EndpointListModel } from '../models/endpoint.model';
import { CurrentContextModel, ContextBehaviorSubjectModel } from '../models/current-context.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  /**
   * Application State Service
   * @description The application uses 2 observables to maintain state:
   * `endpoint$` holds the current list of database endpoints returned from
   * the API server.
   * `currentContext$` holds the menu selection.
   * The currentContext$ observable records the current menu selection,
   * the previous selection and a summary of what changed. Subscribers
   * use the change summary and previous context to determine whether an API
   * call is required.
   */
  private _endpoint: string = '';
  private _owner: string = '';
  private _objectType: string = '';
  private _objectName: string = '';
  private _filter: string = '';
  private _showInternal: boolean = false;
  private _objectList: string[];
  private _sqlEnabled: boolean;

  private endpointList = new BehaviorSubject<EndpointListModel>(new EndpointListModel());
  private subjectContext =
          new BehaviorSubject<ContextBehaviorSubjectModel> (new ContextBehaviorSubjectModel(
            new  CurrentContextModel('', '', '', '', '', false, []),
            new  CurrentContextModel('', '', '', '', '', false, []),
            []));
  private sqlEnabled = new BehaviorSubject<boolean>(false);

  endpoints$ = this.endpointList.asObservable();
  currentContext$ = this.subjectContext.asObservable();
  sqlEnabled$ = this.sqlEnabled.asObservable();

  getCurrentContext() {
    return this.getStoredContext();
  }

  getContextDiff(c1: CurrentContextModel, c2: CurrentContextModel){
    let returnValue = [];
    returnValue['endpointDiff'] = (c1.endpoint !== c2.endpoint);
    returnValue['ownerDiff'] = (c1.owner !== c2.owner);
    returnValue['objectTypeDiff'] = (c1.objectType !== c2.objectType);
    returnValue['objectNameDiff'] = (c1.objectName !== c2.objectName);
    returnValue['filterDiff'] = (c1.filter !== c2.filter);
    returnValue['showInternalDiff'] = (c1.showInternal !== c2.showInternal);
    return(returnValue);
  }

  getSqlEnabled(){
    return this._sqlEnabled;
  }

  storeContextValues(context: CurrentContextModel) {
    this._endpoint = context.endpoint;
    this._owner = context.owner;
    this._objectType = context.objectType;
    this._objectName = context.objectName;
    this._filter = context.filter;
    this._showInternal = context.showInternal;
    this._objectList = context.objectList;

    if (context.objectName){
      this.saveContextInLocalStorage(context);
    }
  }

  getStoredContext(){
    return new CurrentContextModel(this._endpoint, this._owner, this._objectType,
      this._objectName, this._filter, this._showInternal, this._objectList);
  }

  setCurrentContext(context: CurrentContextModel) {
    const priorContext = this.getStoredContext();
    const changeSummary = this.getContextDiff(context, priorContext);
    this.storeContextValues(context);
    this.subjectContext.next(new ContextBehaviorSubjectModel(context, priorContext, changeSummary));
  }

  saveEndpoints(endpoints: EndpointListModel) {
    this.endpointList.next(endpoints);
  }

  saveSqlEnabled(sqlEnabled: boolean) {
    this._sqlEnabled = sqlEnabled;
    this.sqlEnabled.next(sqlEnabled);
  }

  saveContextInLocalStorage(context: CurrentContextModel) {
    const maxHistoryLength = 5;
    const contextObject = { "endpoint": context.endpoint,
                            "owner": context.owner,
                            "objectType": context.objectType,
                            "objectName": context.objectName,
                            "filter": context.filter
                          };

    let history = JSON.parse(localStorage.getItem('objectHistory') || '[]');
    let contextObjectPosn = history.findIndex( obj => obj.objectName === contextObject.objectName &&
                                                      obj.objectType === contextObject.objectType &&
                                                      obj.owner === contextObject.owner &&
                                                      obj.endpoint === contextObject.endpoint );

    if (contextObjectPosn > -1) {
      history.splice(contextObjectPosn, 1);
    }
    if (history.length > maxHistoryLength) {
      history = history.slice(1);
    }
    history.push(contextObject);
    localStorage.setItem('objectHistory', JSON.stringify(history));
  }


}
