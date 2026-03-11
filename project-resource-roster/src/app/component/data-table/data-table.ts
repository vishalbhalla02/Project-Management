import { Component, effect, signal, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { SearchBar } from '../../service/search-bar';
import { MatIcon } from '@angular/material/icon';
import { AddResourceForm } from '../add-resource-form/add-resource-form';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-data-table',
  imports: [MatTableModule, MatIcon, MatButtonModule],
  templateUrl: './data-table.html',
  standalone: true,
  styleUrl: './data-table.css',
})
export class DataTable {
  dataSource = signal<User[]>([]);
  private dialog = inject(MatDialog);
  constructor(private userService: UserService, private searchBar: SearchBar) {
    effect(() => {
      this.filterData();
    });
  }

  ngOnInit() {
    this.userService.getUser().subscribe((data: User[]) => {
      this.dataSource.set(data);
    });
  }

  filterData() {
    this.userService.getUserByName(this.searchBar.searchSignal()).subscribe((data: User[]) => {
      this.dataSource.set(data);
    });
  }

  onEdit(user: User) {
    const dialogRef = this.dialog.open(AddResourceForm, {
      width: '400px',
      data: user,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.updateUser(result).subscribe(() => this.filterData());
      }
    });

  }

  onDelete(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.getUser().subscribe((data: User[]) => {
        this.dataSource.set(data);
      });
    });
  }

  displayedColumns: string[] = ['emp_id', 'name', 'role', 'assigned_project', 'skill', 'actions'];
}
