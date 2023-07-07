import { Component } from '@angular/core';
import { PaisService } from '../../servies/pais.service';
import { Country } from 'src/app/interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[]=[];

  paisesSugeridos:Country []=[];
  mostrarSugerencias :boolean = false;

  constructor(private PaisService:PaisService){}

  sugerencias(termino: string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencias=true;
    this.PaisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
              this.paisesSugeridos= paises.splice(0,5);
        },
        error: (e) => { 
                        this.paisesSugeridos=[];
                      }
        });
  }


  buscar(termino:string) {
    this.termino=termino;
    this.hayError=false;
    //console.log(this.termino);
    this.PaisService.buscarPais(this.termino)
    .subscribe({
      next: (paises) => {
        console.log(paises);
        this.paises=paises;
      },
      error: (e) => { console.log(e);
                      this.hayError=true;
                      this.paises=[];
                    } 
      });

  }
}
