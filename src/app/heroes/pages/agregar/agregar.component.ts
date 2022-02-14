import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor() { }

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
  }
  

}
