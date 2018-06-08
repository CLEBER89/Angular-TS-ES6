//Importando interfaces do ciclo de vida
import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
//implementando interfaces do ciclo de vida
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {
    //console.log(this.coracoes); 
  }

  ngOnChanges() {
    //lógica entre this.tentativas e o this.coracoes.length para eliminar os corações a cada erro
    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas

      //3 - 2 = 1 decremento 1 da variável índice que corresponde ao primeiro objeto (coração)
      //3 - 1 = 2 decremento 1 da variável índice que corresponde ao segundo objeto (coração)
      //3 - 0 = 3 decremento 1 da variável índice que corresponde ao terceiro objeto (coração)
      //Afeta o atributo do objeto

      this.coracoes[indice - 1].cheio = false
    }
    //console.log('tentativas recebidas do painel: ', this.tentativas);
    
  }

  ngOnInit() {

  }

}
