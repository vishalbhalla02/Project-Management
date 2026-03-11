import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/users';

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

  getUserByName(name: string): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '?name_like=' + name)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user)
  }

  deleteUser(id: number) {
    return this.http.delete(this.apiUrl + "/" + id);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user)
  }
}
