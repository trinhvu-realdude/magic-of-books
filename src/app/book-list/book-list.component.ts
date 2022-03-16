import {Component, OnInit} from '@angular/core';
import {ConfigComponent} from '../config/config.component';

@Component({selector: 'app-book-list', templateUrl: './book-list.component.html', styleUrls: ['./book-list.component.css']})
export class BookListComponent implements OnInit {

    books : any;

    constructor(private config : ConfigComponent) {
        this.showBooks();
    }

    ngOnInit(): void {}

    showBooks() {
        this.config.getBooks().subscribe(data => {
            this.books = data
        });
    }

}
