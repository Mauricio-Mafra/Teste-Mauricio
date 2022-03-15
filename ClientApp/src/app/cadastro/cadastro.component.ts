import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  onSubmit(data: any){
    console.log(data);
  }
}
