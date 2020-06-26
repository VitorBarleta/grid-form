import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { TableConfig } from './models/table-config.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-grid-form',
  templateUrl: './data-grid-form.component.html',
  styleUrls: ['./data-grid-form.component.scss']
})
export class DataGridFormComponent implements OnInit {

  @Input() public tableConfig: TableConfig[];
  @Input() public dataSource: any[];
  @Input() public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  public getDisplayedColumns(): string[] {
    return this.tableConfig.map(tb => tb.id);
  }

  public getColumnValue(col: any, colDef: any): string[] {
    return col[colDef.id]
  }

  displayFooterRow(): boolean {
    return this.tableConfig.map(tb => tb.formConfig) == undefined;
  }
}
