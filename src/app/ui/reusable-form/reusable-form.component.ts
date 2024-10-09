import { Component, input, output, forwardRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-reusable-form',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReusableFormComponent),
      multi: true,
    },
  ],
  templateUrl: './reusable-form.component.html',
  styleUrl: './reusable-form.component.scss',
})
export class ReusableFormComponent implements ControlValueAccessor {
  formFields = input<
    Array<{ name: string; label: string; type: string; validators: any[] }>
  >([]);
  formSubmit = output<any>();

  form!: FormGroup;
  onTouched: () => void = () => {};

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const formControls: Record<string, string | any[]> = {};
    this.formFields().forEach((field: { name: string; validators: any[] }) => {
      formControls[field.name] = ['', field.validators];
    });
    this.form = this.fb.group(formControls);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }

  getErrorMessage(fieldName: string): string {
    const control = this.form.get(fieldName);
    if (control?.hasError('required')) {
      return 'Field is required';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email';
    }

    if (control?.hasError('minlength')) {
      return `Minimum length is ${control.getError('minlength').requiredLength}`;
    }

    if (control?.hasError('maxlength')) {
      return `Maximum length is ${control.getError('maxlength').requiredLength}`;
    }

    if (control?.hasError('pattern')) {
      return 'Invalid input';
    }

    return '';
  }

  // ControlValueAccessor methods
  writeValue(value: unknown): void {
    if (value) {
      this.form.patchValue(value, { emitEvent: false });
    }
  }

  registerOnChange(
    fn: Partial<Observer<any>> | ((value: any) => void) | undefined
  ): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
