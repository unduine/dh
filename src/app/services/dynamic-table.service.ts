import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicTable } from '../models/dynamic.model';
import { dynamicTableColumns, dynamicTableRows } from './mocks/dynamic-table.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicTableService {

  constructor() {}

  public get dynamiTableData(): Observable<DynamicTable> {
    return of({
      columns: dynamicTableColumns,
      rows: dynamicTableRows
    })
  }

}