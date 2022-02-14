import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(
    private heroeService:HeroesService
  ) { }

  publishers =[
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    }
  ];

  heroe: Heroes={
    superhero:'',
    publisher:Publisher.DCComics,
    alter_ego:'',
    first_appearance:'',
    characters:'',
    alt_img: ''
  }

  ngOnInit(): void {
  }
  guardar(){
    if(this.heroe.superhero.trim().length==0){
      return;
    }
    this.heroeService.addHeroe(this.heroe)
      .subscribe(resp=>{
        console.log("Respuesta",resp);
      })
  }


}
