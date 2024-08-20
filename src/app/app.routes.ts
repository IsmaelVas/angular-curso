import { Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { FilmeListaComponent } from './filme-lista/filme-lista.component';
import { RpgListaComponent } from './rpg-lista/rpg-lista.component';
import { FilmeEditarComponent } from './filme-editar/filme-editar.component';

export const routes: Routes = [
    {"path": "produtos", component: ProdutoListaComponent},
    {"path": "clientes", component: ClienteListaComponent},
    {"path": "filmes", component: FilmeListaComponent},
    // id: quer dizer que na url terá um parâmetro
    {"path": "filmes/:id", component: FilmeEditarComponent},
    {"path": "rpg", component: RpgListaComponent},
];
