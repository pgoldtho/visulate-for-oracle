/*!
 * Copyright 2020 Visulate LLC. All Rights Reserved.
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

 const values = {
  internalSchemas:
    ['ANONYMOUS','APPQOSSYS','AUDSYS','CTXSYS','DBSFWUSER','DBSNMP','DIP','DVF','DVSYS',
    'GGSYS','GSMADMIN_INTERNAL','GSMCATUSER','GSMUSER','LBACSYS','MDSYS','OJVMSYS','OLAPSYS',
    'ORACLE_OCM','ORDDATA','ORDPLUGINS','ORDSYS','OUTLN','PUBLIC','REMOTE_SCHEDULER_AGENT',
    'SI_INFORMTN_SCHEMA','SYS$UMF','SYS','SYSBACKUP','SYSDG','SYSKM','SYSRAC','SYSTEM',
    'WMSYS','XDB','XS$NULL'],
   requiredPrivilages:
    ['CREATE SESSION','SELECT ANY DICTIONARY','SELECT_CATALOG_ROLE']
 }
 module.exports.values = values;
