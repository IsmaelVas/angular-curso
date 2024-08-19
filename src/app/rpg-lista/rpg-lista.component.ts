import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

interface Rpg {
  id: number;
  nome: string;
  idade: number;
  altura: number;
  raca: string;
  classe: string;
  origem: string;
}

@Component({
  selector: 'app-rpg-lista',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
  ],
  templateUrl: './rpg-lista.component.html',
  styleUrl: './rpg-lista.component.css'
})
export class RpgListaComponent {
  rpg: Array<Rpg> = [];
  carregandoRpg: boolean = false;
  httpClient: HttpClient;
  
  racas = [
    {"id": "Anão", "nome": "Anão"},
    {"id": "Minotauro", "nome": "Minotauro"},
    {"id": "Osteon", "nome": "Osteon"},
  ];

  classes = [
    {"id": "Caçador", "nome": "Caçador"},
    {"id": "Guerreiro", "nome": "Guerreiro"},
    {"id": "Paladino", "nome": "Paladino"},
  ]

  origens = [
    {"id": "Artesão", "nome": "Artesão"},
    {"id": "Mercador", "nome": "Mercador"},
    {"id": "Marujo", "nome": "Marujo"},
  ]

  visible: boolean = false;

  nome: string = "";
  idade: number = 0;
  altura: number = 0;
  raca: any = "";
  classe: any = "";
  origem: any = "";

  constructor(httpClient: HttpClient){
    this.httpClient = httpClient;
  }

  ngOnInit(){
    this.consultar();
  }

  consultar(){
    this.carregandoRpg = true;
    this.httpClient.get<Array<Rpg>>("http://localhost:3000/rpg").subscribe(x => this.aposConsultar(x));
  }

  aposConsultar(dados: Array<Rpg>){
    this.rpg = dados;
    this.carregandoRpg = false;
    
  }

  apagar(id: number){
    this.httpClient.delete(`http://localhost:3000/rpg/${id}`).subscribe(x => this.apagouRegistro());
  }

  apagouRegistro(){
      this.consultar();
  }

  salvar(){
    let dados = {
      nome: this.nome,
      idade: this.idade,
      altura: this.altura,
      raca: this.raca["nome"],
      classe: this.classe["nome"],
      origem: this.origem["nome"],
    }
    this.httpClient.post("http://localhost:3000/rpg", dados).subscribe(x => this.aposSalvar(x));
  }

  aposSalvar(x: any){
    this.limparCampos();
    this.consultar();
    this.visible = false;
  }

  limparCampos(){
    this.nome = "";
    this.idade = 0;
    this.altura = 0
    this.raca = "";
    this.classe = "";
    this.origem = "";
  }

  editar(){

  }

  showDialog(){
    this.visible = true
  }
}
