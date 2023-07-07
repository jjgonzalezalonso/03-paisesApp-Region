import { Component } from '@angular/core';
import { PaisService } from '../../servies/pais.service';
import { Country } from 'src/app/interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  constructor(private paisServide: PaisService) { }

  activarRegion(region: string) {
    if (region === this.regionActiva) { return; }
    this.regionActiva = region;
    this.buscarRegion(region);
  }

  termino: string = '';  //PROPIEDADES
  hayError: boolean = false;
  paises: Country[] = [];   //Ctrol + PTO, para el import

  buscarRegion(termino: string) {
    this.termino = termino;
    this.hayError = false;
    this.paises = []; //lo vacio

    this.paisServide.buscarRegion(this.termino)
      .subscribe({
        next: (paises) => {
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
