import { Component, OnInit } from '@angular/core';

import { Album } from '../album.model';
import { ALBUMS } from '../album.data';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];

  constructor() { }

  ngOnInit() {
    this.albums = this.albums = ALBUMS;
  }

  parentFunctionHandler(album) {
    alert('Album ' + album.album_name + ' was sent from the album card component');
  }

}
