import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()//Cria umm atb publico, associa a uma instancia e depois decora

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //console.log('Destruído');
    
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr == this.resposta) {

      //trocar pergunta da rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso);

      //
      if(this.rodada === 4) {
        this.encerrarJogo.emit('Vitória')
      }
    
      //atualiza o objeto rodadaFrase 
      this.atualizaRodada()

    } else {
      //diminuir a variável tentativas
      this.tentativas--

      if(this.tentativas === -1) {
        this.encerrarJogo.emit('Derrota')
      }
    }
  }

  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]

    //limpar a resposta
    this.resposta = ''
  }


}











/*import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES 
  public instrucao: string = 'Traduza a frase:' 
  public resposta: string

  public rodada: number = 0
  public rodadaFrase: Frase

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]  
    console.log(this.rodadaFrase) 
  }

  ngOnInit() {
  }

  public atualizaResp(resposta: Event): void {//Sem operador de visibilidade o TypeScript interpreta o método como public
    this.resposta = (<HTMLInputElement>resposta.target).value //Atribui o value do texarea para um atributo da propria classe
    //console.log(this.resposta)
    
  }

  public verificarResposta(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta!')

      //troca a pergunta da rodada
      this.rodada++

      //atualiza o objeto rodadaFrase
      this.rodadaFrase = this.frases[this.rodada]

    } else {
      alert('A tradução está incorreta!')
    }

  }

}
*/