import { Injectable } from "@angular/core";
import { ALBUMS } from "../../albums/album.data";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  constructor() { }

  getAlbums() {
    return ALBUMS;
  }
}
