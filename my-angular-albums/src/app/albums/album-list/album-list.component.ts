import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "../album.model";
import { AlbumService } from "../shared/album.service";
import { Observable } from 'rxjs';

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent {

  constructor(private albumService: AlbumService) { }

  albums: Observable<Album[]>;
}
