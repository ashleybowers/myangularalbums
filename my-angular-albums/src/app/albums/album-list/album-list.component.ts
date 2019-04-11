import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "../album.model";
import { AlbumService } from "../shared/album.service";

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  @Input()
  album: Album;

  getAlbums() {
    this.album = this.albumService.getAlbums();
  }

  ngOnInit() {
    this.getAlbums();
  }
}
