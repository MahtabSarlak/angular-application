import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../styles.less'],
  imports: [
    NzFormModule,
    NzDividerModule,
    ReactiveFormsModule,
    FormsModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule
  ],
  standalone: true
})
export class DashboardComponent implements OnInit {
  dashboardForm!: FormGroup;

  submitForm(): void {
    if (this.dashboardForm.valid) {
      console.log('submit', this.dashboardForm.value);
    } else {
      Object.values(this.dashboardForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dashboardForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
