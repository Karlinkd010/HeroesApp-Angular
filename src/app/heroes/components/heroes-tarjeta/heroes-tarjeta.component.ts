import { Component, Input } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
  styles: [
  ]
})
export class HeroesTarjetaComponent{
@Input() heroe!:Heroes;

}
