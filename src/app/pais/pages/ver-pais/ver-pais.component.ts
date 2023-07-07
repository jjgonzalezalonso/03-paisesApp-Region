import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../servies/pais.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from 'src/app/interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private PaisService: PaisService) { }
  pais!: Country;
  
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(param => {
    // console.log(param['id']);
    // this.PaisService.getPaisPorAlpha(param['id']).subscribe(pais => {console.log(pais)});

    this.activatedRoute.params
      .pipe(switchMap((param) => this.PaisService.getPaisPorAlpha(param['id'])),tap(console.log))
      .subscribe(pais => { this.pais= pais[0] });

  }

}


