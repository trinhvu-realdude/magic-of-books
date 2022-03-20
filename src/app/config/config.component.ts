import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import { Book } from '../model/book';
import { User } from '../model/user';

@Injectable({providedIn: 'root'})
export class ConfigComponent implements OnInit {

    constructor(private http : HttpClient) {}

    ngOnInit(): void {}

    getBooks() {
        return this.http.get("http://localhost:3000/Books/");
    }

    getUserById(id: number) {
        return this.http.get<User>("http://localhost:3000/Users/" + id);
    }

    getBookById(id: number) {
        return this.http.get<Book>("http://localhost:3000/Books/" + id);
    }
}
