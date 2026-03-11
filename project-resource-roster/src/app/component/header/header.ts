import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddResourceForm } from '../add-resource-form/add-resource-form';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isAddUser: boolean = false;
  private dialog = inject(MatDialog);
  constructor(private addUserService: UserService) { }
  addUser(user: User) {
    this.addUserService.addUser(user).subscribe((data: User) => {
    })
  }
  toggleAddUser() {
    const dialogRef = this.dialog.open(AddResourceForm, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addUser(result);
      }
    });
  }


}
