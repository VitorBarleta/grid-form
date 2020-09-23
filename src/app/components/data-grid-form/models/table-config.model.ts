import { Validator, Validators, ValidationErrors, FormControl, AbstractControl } from '@angular/forms';

export interface TableConfig {
    id: string;
    title: string;
    formConfig: FormConfig;
}

export interface FormConfig {
    displayedLabel: string;
    type: string;
    controlName: string;
}
