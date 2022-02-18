import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

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
    private router: Router,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
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
        .subscribe(heroe=>{
          this.mensaje('Registro actualizado correctamente');
          this.router.navigate(['/heroes/listado']);
        }         
      )

    }else{
      this.heroeService.addHeroe(this.heroe)
        .subscribe(resp=>{
          this.mensaje('Registro guardado correctamente');
          this.router.navigate(['/heroes/listado']);
      })
    }
    
  }

  eliminar(){
    
    this.heroeService.deleteHeroe(this.heroe.id!)
      .subscribe(resp=>{
        this.mensaje('Registro eliminado correctamente!');
        this.router.navigate(['/heroes/listado'])
      })
  }

  mensaje(mensaje:string){
    this._snackBar.open(mensaje, 'Ok!',
    {
      duration:2500
    })
  }


}
