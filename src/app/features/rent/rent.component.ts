import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ReusableFormComponent } from '../../ui/reusable-form/reusable-form.component';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [
    ReusableFormComponent,
    ReactiveFormsModule
  ],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.scss'
})
export class RentComponent {
  parentForm!: FormGroup;
  formFields = [
    { name: 'name', label: 'Name', type: 'text', validators: [Validators.required] },
    { name: 'email', label: 'Email', type: 'email', validators: [Validators.required, Validators.email] }
  ];

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.parentForm = this.fb.group({
      reusableForm: [null, Validators.required]
    });
  }

  onFormSubmit(formData: Record<string, unknown>) {
    console.log('Form submitted:', formData);
    // Handle form submission
  }

}
