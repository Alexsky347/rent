import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ReusableFormComponent } from '../../ui/reusable-form/reusable-form.component';

type CallBackFn = (formData: Record<string, number>) => void;
type RentTab = 'gross' | 'net' | 'monthly';
@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [ReusableFormComponent, ReactiveFormsModule],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.scss',
})
export class RentComponent {
  showRentTab: RentTab = 'gross';
  grossProfitabilityForm!: FormGroup;
  grossProfitabilityFormFields = [
    {
      name: 'rent',
      label: 'Loyer Mensuel',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'price',
      label: 'Prix achat',
      type: 'number',
      validators: [Validators.required],
    },
  ];
  grossProfitabilityResult!: number;

  netProfitabilityForm!: FormGroup;
  netProfitabilityFormFields = [
    {
      name: 'rent',
      label: 'Loyer Mensuel',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'price',
      label: 'Prix achat',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'propertyTax',
      label: 'Taxe foncière mensuelle',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'coOwnershipCharges',
      label: 'Charges copropriété mensuelles',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'agencyFees',
      label: 'Honoraires agence mensuelles',
      type: 'number',
      validators: [],
    },
  ];
  netProfitabilityResult!: number;

  monthlyProfitForm!: FormGroup;
  monthlyProfitFormFields = [
    {
      name: 'rent',
      label: 'Loyer mensuel',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'rentAssurance',
      label: 'Assurance habitation mensuelle',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'credit',
      label: 'Remboursement crédit mensuelle',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'creditAssurance',
      label: 'Assurance crédit mensuelle',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'propertyTax',
      label: 'Taxe foncière mensuelle',
      type: 'number',
      validators: [Validators.required],
    },
    {
      name: 'agencyFees',
      label: 'Honoraires agence mensuelles',
      type: 'number',
      validators: [],
    },
  ];
  monthlyProfitResult!: number;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.grossProfitabilityForm = this.fb.group({
      reusableForm: [null, Validators.required],
    });
    this.netProfitabilityForm = this.fb.group({
      reusableForm: [null, Validators.required],
    });
    this.monthlyProfitForm = this.fb.group({
      reusableForm: [null, Validators.required],
    });
  }

  callBackComputeGrossRent = (formData: Record<string, number>) => {
    const { rent, price } = formData;
    const annualRent = rent * 12;
    this.grossProfitabilityResult = (annualRent / price) * 100;
  };

  callBackComputeNetRent = (formData: Record<string, number>) => {
    const { rent, price, propertyTax, coOwnershipCharges, agencyFees } =
      formData;
    const annualRent =
      rent * 12 -
      -(propertyTax * 12) -
      agencyFees * 12 -
      coOwnershipCharges * 12;
    this.netProfitabilityResult = (annualRent / price) * 100;
  };

  handleShowTab(tab: string) {
    return this.showRentTab !== tab;
  }

  showTab(tab: RentTab) {
    this.showRentTab = tab;
  }



  callBackComputeMonthlyProfit = (formData: Record<string, number>) => {
    const {
      rent,
      rentAssurance,
      credit,
      creditAssurance,
      propertyTax,
      agencyFees,
    } = formData;
    const charges =
      Number(propertyTax) +
      Number(agencyFees) +
      Number(rentAssurance) +
      Number(creditAssurance) +
      Number(credit);
    this.monthlyProfitResult = rent - charges;
  };

  onFormSubmit = (
    formData: Record<string, number>,
    callBack: CallBackFn
  ): void => {
    callBack(formData);
  };
}
