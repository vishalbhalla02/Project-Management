import { Component, inject, Inject } from '@angular/core';
import { MatFormField, MatLabel, MatError } from "@angular/material/form-field";
import { MatDialogActions, MatDialogContent } from "@angular/material/dialog";
import { MatInputModule } from '@angular/material/input';
import { MatDialogClose } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user';

@Component({
  selector: 'app-add-resource-form',
  imports: [MatFormField, MatLabel, MatError, MatDialogActions, MatDialogContent, ReactiveFormsModule, MatInputModule, MatDialogClose, MatButtonModule],
  templateUrl: './add-resource-form.html',
  styleUrl: './add-resource-form.css',
})
export class AddResourceForm {
  constructor(@Inject(MAT_DIALOG_DATA) public data: User) { }
  private fb = inject(FormBuilder);
  formType = 'Create'
  ngOnInit() {
    if (this.data) {
      this.formType = 'Update'
      this.userForm.patchValue(this.data);
    }
  }

  userForm = this.fb.group({
    id: [null as number | null],
    emp_id: [null as number | null, Validators.required],
    name: ['', Validators.required],
    role: ['', Validators.required],
    assigned_project: ['', Validators.required],
    skill: ['', Validators.required]
  });
}
