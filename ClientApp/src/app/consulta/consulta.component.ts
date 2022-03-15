import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-component',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent {

  onSubmit(data: any) {
    console.log(data);
  }
}
