import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cep: string;
  endereco: any;

  constructor(private http: HttpClient) {}

  consultarCEP() {
    if (!this.cep) {
      return;
    }

    this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe((data) => {
      this.endereco = data;
    });
  }
}
