import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album.model';
import { ALBUMS } from '../album.data';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})

export class AlbumCardComponent implements OnInit {

  @Input()
  albums: Album[];

  constructor() { }

  ngOnInit() {
    this.albums = ALBUMS;
  }
}
