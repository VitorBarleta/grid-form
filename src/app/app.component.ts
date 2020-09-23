import { Component } from '@angular/core';
import { Employee } from './models/employee.model';
import { Observable, of } from 'rxjs';
import { TableConfig, FormConfig } from './components/data-grid-form/models/table-config.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataSource: Observable<Employee[]> = of([
    {
      name: 'Vitor',
      age: 20,
      asd: 'Asd'
    },
    {
      name: 'Carlos',
      age: 45,
      asd: 'Asd'
    }
  ] as Employee[]);

  tableConfig: TableConfig[] = [
    {
      title: 'Employee',
      id: 'name',
      formConfig: {
        controlName: 'name',
        displayedLabel: 'Name',
        type: 'text'
      }
    },
    {
      title: 'Age',
      id: 'age',
      formConfig: {
        controlName: 'age',
        displayedLabel: 'Age',
        type: 'number'
      }
    },
    {
      title: 'sdfsd',
      id: 'asd',
    }
  ] as TableConfig[];

  formGroup: FormGroup = new FormBuilder().group({
    id: [''],
    name: ['', Validators.required],
    age: [''],
    asd: ['']
  });

}
