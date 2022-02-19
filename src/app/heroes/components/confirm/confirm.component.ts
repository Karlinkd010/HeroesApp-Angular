import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements OnInit {

  constructor(
    private refDialog: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroes
  ) { }

  ngOnInit(): void {
  }
  borrar(){
    this.refDialog.close(true);
  }
  cancelar(){
    this.refDialog.close();
  }

}
