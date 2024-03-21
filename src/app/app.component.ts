import { Component, OnInit } from '@angular/core';
import { DynamicTableCols, DynamicTableRows } from './models/dynamic.model';
import { DynamicTableService } from './services/dynamic-table.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public rowsData: DynamicTableRows[];
  public colsData: DynamicTableCols[];

  constructor(private dynamicTableService: DynamicTableService) {
  }

  // not sure that needs any optimisation, we have to show this table as is, meaning each new time it can be different data. Only one thing is can be optimised - render cols/rows blocks as separate compnent with OnPush strategy
  ngOnInit(): void {
    
    this.dynamicTableService.dynamiTableData.subscribe(
      (data) => {
        this.rowsData = data?.rows;
        this.colsData = data?.columns;
      },
      (e) => {
        throw(e);
      }
    )
  }
}
