
import { Component, ViewChild, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {AsyncPipe, NgStyle} from "@angular/common";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../styles.less'],
  imports: [
    NzFormModule,
    NzDividerModule,
    ReactiveFormsModule,
    FormsModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    RouterLink,
    NzBadgeModule,
    AsyncPipe,
    NgStyle,
    RouterLinkActive
  ],
  standalone: true
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
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
