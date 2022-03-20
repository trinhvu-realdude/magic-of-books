import {Component, OnInit} from '@angular/core';
import {ConfigComponent} from '../config/config.component';
import {Book} from '../model/book';

@Component({selector: 'app-wish-list', templateUrl: './wish-list.component.html', styleUrls: ['./wish-list.component.css']})
export class WishListComponent implements OnInit {

    userId : number = 1;

    list = new Array;

    constructor(private config : ConfigComponent) {}

    ngOnInit(): void {
        this.showWishList();
    }

    showWishList() { // let list = new Array;
        this.config.getUserById(this.userId).subscribe(data => {
            data.WishList.forEach((id : number) => {
                this.config.getBookById(id).subscribe((book : Book) => {
                    this.list.push(book);
                })
            });
            console.log(this.list);
        })
    }
}
