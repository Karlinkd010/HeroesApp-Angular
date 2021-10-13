import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  mat-card{
    margin-top:20px;
  }
  `]
})
export class ListadoComponent implements OnInit {

  heroe: Heroes[] = [];
  constructor(private heroeService:HeroesService) { }

  ngOnInit(): void {
    this.heroeService.getHeroes().subscribe(
      Heroes=> {
        this.heroe=Heroes
        console.log(Heroes);
      }

    )
  }

}
