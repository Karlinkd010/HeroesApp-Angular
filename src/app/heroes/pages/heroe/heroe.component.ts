import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
  heroe!:Heroes;

  constructor(
    private activateRoute: ActivatedRoute,
    private serviceHeroe : HeroesService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(
          ({id})=> this.serviceHeroe.getHeroePorId(id)
        )
      )
      .subscribe(heroe=> this.heroe=heroe)
  }

}
