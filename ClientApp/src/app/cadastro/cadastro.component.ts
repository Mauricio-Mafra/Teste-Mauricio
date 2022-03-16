import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  }

onSubmit(data: any) {
  //this.http.post(baseUrl, data, httpOptions);
  }
}
