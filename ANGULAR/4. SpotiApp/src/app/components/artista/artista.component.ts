import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any;
  pistas:any[];


  constructor( private activatedRoute: ActivatedRoute,
                private _spotifyService: SpotifyService) {

    this.activatedRoute.params
      .map( parametros => parametros['id'])
      .subscribe( id =>{
        this._spotifyService.getArtista(id)
          .subscribe( data =>
          {this.artista = data;
          console.log(this.artista)});

        this._spotifyService.getTop(id)
          .subscribe( data => this.pistas = data );
        console.log(this.artista);
      });
  }

  ngOnInit() {



  }
}
