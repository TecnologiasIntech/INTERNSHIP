import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html'
})

export class NuevoComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private _heroesService:HeroesService,
              private activatedRoute:ActivatedRoute,
              ) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
    } );
  }

}
