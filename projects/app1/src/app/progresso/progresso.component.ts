import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  /* O componente progresso possui uma variável que aceita
  parâmetros externos definidos no momento da instância do componente função @Input*/
  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit() {
  }

}
