import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ConfigComponent implements OnInit {

    constructor(private http : HttpClient) {}

    ngOnInit(): void {}

    getBooks() {
        return this.http.get("http://localhost:3000/Books");
    }
}
