import { Component } from '@angular/core';
import { Country } from 'src/app/interfaces/pais.interfaces';
import { PaisService } from '../../servies/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisService: PaisService) { }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    //console.log(this.termino);
    this.PaisService.buscarCapital(this.termino)
      .subscribe({
        next: (paises) => {
          console.log(paises);
          this.paises = paises;
        },
        error: (e) => {
          console.log(e);
          this.hayError = true;
          this.paises = [];
        }
      });
  }
}
