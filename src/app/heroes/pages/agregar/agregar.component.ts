import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width:100%;
    border-radius:5px;
  }
  `]
})
export class AgregarComponent implements OnInit {
  accion:string="";
  icon:string="";

  constructor(
    private heroeService: HeroesService,
    private activateRoute: ActivatedRoute,
    private router: Router
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

    if( !this.router.url.includes('editar') ){
      this.accion="Guardar";
      this.icon="person_add";

      return;
    }
    this.accion="Actualizar";
    this.icon="engineering";

    this.activateRoute.params
    .pipe(
      switchMap(({id})=> this.heroeService.getHeroePorId(id))
    )
    .subscribe(heroe=> this.heroe=heroe)
   
  }
  guardar(){
    if(this.heroe.superhero.trim().length==0){
      return;
    }
    if(this.heroe.id){
      this.heroeService.updateHeroe(this.heroe)
        .subscribe(heroe=>
          this.router.navigate(['/heroes/listado'])

      )

    }else{
      this.heroeService.addHeroe(this.heroe)
        .subscribe(resp=>{
          console.log("Guardado...",resp);
          this.router.navigate(['/heroes/listado'])
      })
    }
    
  }

  eliminar(){
    this.heroeService.deleteHeroe(this.heroe.id!)
      .subscribe(resp=>{
        this.router.navigate(['/heroes/listado'])
      })
  }


}
