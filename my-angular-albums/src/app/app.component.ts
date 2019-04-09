import { Component, OnInit } from '@angular/core';
import { Album } from "./albums/album.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-angular-albums';
  albumsArray: Album[];
  titleCounter: number;
  numbers: number[];

  ngOnInit(): void {
    this.titleCounter = 1;
    this.numbers = [1, 2, 3];

    this.albumsArray = [
      {
        id: 1,
        artist: 'Tremonti',
        album_name: 'Dust',
        genre: 'Pop/Rock',
        price: 11.99,
        currency: 'USD',
        on_sale: true,
        year: 2016,
        release_date: 'April 29, 2016',
        recording_location: 'Studio Barbarosa, Orlando, FL',
        duration: '43:18:00',
        url: 'https://www.allmusic.com/album/dust-mw0002918360',
      },
      {
        id: 2,
        artist: 'Bon Jovi',
        album_name: '7800 Fahrerenheit',
        on_sale: false,
        price: 7,
        year: 1985,
        currency: 'USD',
        release_date: 'April 20, 1985',
        recording_location: 'Warehouse, Philadelphia, PA',
        genre: 'Pop/Rock',
        duration: '47:15:00',
        url:
          'https://www.allmusic.com/album/7800%C2%B0-fahrenheit-mw0000189199',
      },
      {
        id: 3,
        artist: 'The Beatles',
        album_name: 'The White Album',
        on_sale: true,
        currency: 'GBP',
        price: 24,
        year: 1968,
        release_date: 'November 22, 1968',
        recording_location: '',
        genre: 'Pop/Rock',
        duration: '1:33:43',
        url:
          'https://www.allmusic.com/album/the-beatles-white-album-mw0000418113',
      },
    ];

    function updatePrice() {
      this.titleCounter++;
      this.albumsArray[0].price += 10;
    }

    const interval = setInterval(() => updatePrice, 2000);
    this.numbers.push(4);
    setTimeout(() => clearInterval(interval), 6000);
    console.log(this.albumsArray[0].price += 10);
    this.numbers = [...this.numbers];

  }


}
