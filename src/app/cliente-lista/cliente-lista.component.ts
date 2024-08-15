import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-lista.component.html',
  styleUrl: './cliente-lista.component.css'
})
export class ClienteListaComponent {
  nomeCliente: string = '';
  indiciAlterar: number = -1;
  mensagemErro: string = '';
  tituloBotaoSalvarCliente: string = 'Cadastrar';

  clientes: Array<string> = [
    "Francisco",
    "Ismael",
    "Mateus com H"
  ]
  
    salvarCliente(){
    this.mensagemErro = '';

    if (this.nomeCliente.length < 3){
      this.mensagemErro = "Cliente deve conter no minímo 3 letras";
      return;
    }

    if (this.nomeCliente.length > 100){
      this.mensagemErro = "Cliente deve conter no máximo 100 letras";
      return;
    }

    let existeCliente = this.clientes.some(x => x === this.nomeCliente);
    if(existeCliente === true){
      this.mensagemErro = `Cliente já cadastrado com o nome '${this.nomeCliente}'`;
      return;
    }

    if (this.indiciAlterar === -1) {
      this.clientes.push(this.nomeCliente)
    } else {
      this.clientes[this.indiciAlterar] = this.nomeCliente;
      this.indiciAlterar = -1
      this.tituloBotaoSalvarCliente = "Cadastrar";
    }
    this.nomeCliente = "";
  }

  apagarCliente(nomeCliente: string){
    let indiceCliente = this.clientes.findIndex(x => x === nomeCliente);
    this.clientes.splice(indiceCliente, 1)
  }

  editarCliente(nomeCliente: string){
    this.indiciAlterar = this.clientes.findIndex(x => x === nomeCliente);
    this.tituloBotaoSalvarCliente = "Editar"
    this.nomeCliente = nomeCliente;
  }
}
