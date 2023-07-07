import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  @Input() placeholder: string = '';
  //@Output() mievento: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        console.log('debouncer:', valor);
        this.onDebounce.emit(valor);
      })

  }

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);
  }


  teclaPresionada(event: any) {
    this.debouncer.next(this.termino);
  }

}
