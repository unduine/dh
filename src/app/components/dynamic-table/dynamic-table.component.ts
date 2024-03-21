import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DynamicTableCols, DynamicTableRows } from 'src/app/models/dynamic.model';



@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableComponent implements OnInit {
  @Input() rows: DynamicTableCols[];
  @Input() cols: DynamicTableRows[];


  constructor() { }

  ngOnInit() {
  }

}