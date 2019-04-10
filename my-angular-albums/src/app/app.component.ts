import { Component, OnInit } from '@angular/core';
import { Album } from "./albums/album.model";
import { ALBUMS } from "./albums/album.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'My Angular Albums';
  albumsArray: Album[];
  titleCounter: number;
  numbers: number[];

  ngOnInit(): void {
    this.albumsArray = ALBUMS;
    this.titleCounter = 1;
    this.numbers = [1, 2, 3];

    const interval = setInterval(() => { this.titleCounter++; this.albumsArray[0].price += 10; this.numbers.push(4); }, 2000);
    setTimeout(() => clearInterval(interval), 6000);
    this.numbers = [...this.numbers];
  }
}
